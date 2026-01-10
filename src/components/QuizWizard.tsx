'use client';

import { useState } from 'react';
import { Product, products, Category, Gender, Budget, Form } from '@/data/products';
import { Button } from '@/components/ui/Button';
import { ProductCard } from '@/components/ProductCard';
import { ArrowRight, CheckCircle2, RefreshCw } from 'lucide-react';
import { QuizResults } from '@/components/QuizResults';

type Step = 'gender' | 'goal' | 'form' | 'budget' | 'results';

interface QuizState {
    gender: Gender | null;
    goal: Category | null;
    form: Form | null;
    budget: Budget | null;
}

export function QuizWizard() {
    const [step, setStep] = useState<Step>('gender');
    const [answers, setAnswers] = useState<QuizState>({
        gender: null,
        goal: null,
        form: null,
        budget: null,
    });
    const [recommendations, setRecommendations] = useState<Product[]>([]);

    const handleGenderSelect = (gender: Gender) => {
        setAnswers(prev => ({ ...prev, gender }));
        setStep('goal');
    };

    const handleGoalSelect = (goal: Category) => {
        setAnswers(prev => ({ ...prev, goal }));
        setStep('form');
    };

    const handleFormSelect = (form: Form) => {
        setAnswers(prev => ({ ...prev, form }));
        setStep('budget');
    };

    const handleBudgetSelect = (budget: Budget) => {
        const finalAnswers = { ...answers, budget };
        setAnswers(finalAnswers);
        calculateRecommendations(finalAnswers);
        setStep('results');
    };

    const calculateRecommendations = (state: QuizState) => {
        // Score products based on relevance
        const scored = products.map(product => {
            let score = 0;

            // 1. Goal match (Primary factor)
            if (product.category === state.goal) score += 10;

            // 2. Gender match
            if (product.gender === state.gender || product.gender === 'unisex') score += 5;
            if (product.gender !== 'unisex' && product.gender !== state.gender) score -= 100; // Filter out wrong gender

            // 3. Form match (Strict preference with fallback logic in scoring)
            if (state.form !== 'any') {
                if (product.form === state.form) {
                    score += 8; // High boost for preferred form
                } else {
                    // If user wants specific form but product doesn't match, penalize slightly but don't exclude completely
                    // UNLESS strict filtering is desired.
                    // User request: "strictly filter... Fallback: if 0 results, relax".
                    // Implementation: We'll handle strict functionality by checking results count after sorting.
                    score -= 5;
                }
            }

            // 3. Budget match
            // Logic: Cheap < 500, Quality 500-1000, Premium > 1000
            if (state.budget === 'cheap' && product.price < 500) score += 5;
            if (state.budget === 'quality' && product.price >= 500 && product.price <= 1000) score += 5;
            if (state.budget === 'premium' && product.price > 1000) score += 5;

            return { product, score };
        });

        // Sort by score
        let sorted = scored.sort((a, b) => b.score - a.score);

        // Strict Filter Logic:
        // If user selected a specific form (not 'any'), try to find products that match that form.
        if (state.form && state.form !== 'any') {
            const strictMatches = sorted.filter(item => item.product.form === state.form && item.score > 0);

            // If we have at least one valid match with the correct form, use ONLY those.
            if (strictMatches.length > 0) {
                sorted = strictMatches;
            }
            // Else fallback to the original sorted list (relaxed filter).
        }

        const top3 = sorted.slice(0, 3).map(item => item.product);
        setRecommendations(top3);
    };

    const resetQuiz = () => {
        setAnswers({ gender: null, goal: null, form: null, budget: null });
        setStep('gender');
    };

    return (
        <div className="w-full max-w-4xl mx-auto px-4 py-8">
            {/* Progress Bar */}
            <div className="mb-8">
                <div className="flex justify-between mb-2 text-sm font-medium text-slate-500">
                    <span className={step === 'gender' ? 'text-emerald-600' : ''}>Pohlaví</span>
                    <span className={step === 'goal' ? 'text-emerald-600' : ''}>Cíl</span>
                    <span className={step === 'form' ? 'text-emerald-600' : ''}>Forma</span>
                    <span className={step === 'budget' ? 'text-emerald-600' : ''}>Rozpočet</span>
                    <span className={step === 'results' ? 'text-emerald-600' : ''}>Výsledky</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-emerald-500 transition-all duration-500 ease-out"
                        style={{
                            width: step === 'gender' ? '20%' :
                                step === 'goal' ? '40%' :
                                    step === 'form' ? '60%' :
                                        step === 'budget' ? '80%' : '100%'
                        }}
                    />
                </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 min-h-[400px] flex flex-col items-center justify-center text-center">

                {step === 'gender' && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 w-full max-w-md">
                        <h2 className="text-3xl font-bold text-slate-900 mb-2">Jste Muž nebo Žena?</h2>
                        <p className="text-slate-500 mb-8">Abychom vám mohli lépe doporučit produkty.</p>
                        <div className="grid grid-cols-2 gap-4">
                            <button
                                onClick={() => handleGenderSelect('male')}
                                className="h-32 rounded-2xl border-2 border-slate-100 hover:border-emerald-500 hover:bg-emerald-50 transition-all group flex flex-col items-center justify-center gap-2"
                            >
                                <div className="w-12 h-12 rounded-full bg-slate-100 group-hover:bg-emerald-200 flex items-center justify-center text-2xl">👨</div>
                                <span className="font-semibold text-slate-700 group-hover:text-emerald-700">Muž</span>
                            </button>
                            <button
                                onClick={() => handleGenderSelect('female')}
                                className="h-32 rounded-2xl border-2 border-slate-100 hover:border-emerald-500 hover:bg-emerald-50 transition-all group flex flex-col items-center justify-center gap-2"
                            >
                                <div className="w-12 h-12 rounded-full bg-slate-100 group-hover:bg-emerald-200 flex items-center justify-center text-2xl">👩</div>
                                <span className="font-semibold text-slate-700 group-hover:text-emerald-700">Žena</span>
                            </button>
                        </div>
                    </div>
                )}

                {step === 'goal' && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 w-full max-w-lg">
                        <h2 className="text-3xl font-bold text-slate-900 mb-2">Co je vaším hlavním cílem?</h2>
                        <p className="text-slate-500 mb-8">Vyberte jednu z možností.</p>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { id: 'weight_loss', label: 'Zhubnout', emoji: '⚖️' },
                                { id: 'energy', label: 'Více energie', emoji: '⚡' },
                                { id: 'sleep', label: 'Lepší spánek', emoji: '💤' },
                                { id: 'muscle', label: 'Růst svalů', emoji: '💪' },
                            ].map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => handleGoalSelect(item.id as Category)}
                                    className="p-4 rounded-xl border-2 border-slate-100 hover:border-emerald-500 hover:bg-emerald-50 transition-all text-left flex items-center gap-4 group"
                                >
                                    <span className="text-2xl">{item.emoji}</span>
                                    <span className="font-semibold text-slate-700 group-hover:text-emerald-700">{item.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {step === 'form' && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 w-full max-w-lg">
                        <h2 className="text-3xl font-bold text-slate-900 mb-2">V jaké formě doplňky preferujete?</h2>
                        <p className="text-slate-500 mb-8">Někdo raději polyká, jiný pije.</p>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { id: 'pill', label: 'Tablety / Kapsle', emoji: '💊' },
                                { id: 'powder', label: 'Nápoj / Prášek', emoji: '🥤' },
                                { id: 'drops', label: 'Kapky / Olej', emoji: '💧' },
                                { id: 'any', label: 'Je mi to jedno', emoji: '🤷' },
                            ].map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => handleFormSelect(item.id as Form)}
                                    className="p-4 rounded-xl border-2 border-slate-100 hover:border-emerald-500 hover:bg-emerald-50 transition-all text-left flex items-center gap-4 group"
                                >
                                    <span className="text-2xl">{item.emoji}</span>
                                    <span className="font-semibold text-slate-700 group-hover:text-emerald-700">{item.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {step === 'budget' && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 w-full max-w-lg">
                        <h2 className="text-3xl font-bold text-slate-900 mb-2">Jaký je váš rozpočet?</h2>
                        <p className="text-slate-500 mb-8">Najdeme to nejlepší v dané relaci.</p>
                        <div className="space-y-3">
                            {[
                                { id: 'cheap', label: 'Levné řešení', desc: 'Do 500 Kč', icon: '💰' },
                                { id: 'quality', label: 'Zlatá střední cesta', desc: '500 - 1000 Kč', icon: '💎' },
                                { id: 'premium', label: 'Premium kvalita', desc: 'Nad 1000 Kč', icon: '👑' },
                            ].map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => handleBudgetSelect(item.id as Budget)}
                                    className="w-full p-4 rounded-xl border-2 border-slate-100 hover:border-emerald-500 hover:bg-emerald-50 transition-all flex items-center justify-between group"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-xl group-hover:bg-emerald-200">
                                            {item.icon}
                                        </div>
                                        <div className="text-left">
                                            <div className="font-semibold text-slate-900 group-hover:text-emerald-800">{item.label}</div>
                                            <div className="text-sm text-slate-500 group-hover:text-emerald-600">{item.desc}</div>
                                        </div>
                                    </div>
                                    <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-emerald-500" />
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {step === 'results' && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 w-full">
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mb-4">
                                <CheckCircle2 className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900">Našli jsme pro vás tyto produkty</h2>
                            <p className="text-slate-500">Na základě vašich preferencí.</p>
                        </div>

                        <QuizResults products={recommendations} goal={answers.goal} />

                        <div className="mt-12 text-center">
                            <Button variant="ghost" onClick={resetQuiz} className="gap-2 text-slate-500 hover:text-slate-700">
                                <RefreshCw size={16} /> Spustit test znovu
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
