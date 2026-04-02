import { DesktopTechUi } from './components/DesktopTechUi';
import { DesktopTechUiV2 } from './components/DesktopTechUiV2';
import { DesktopTechUiV4 } from './components/DesktopTechUiV4';
import { DesktopTechUiV5 } from './components/DesktopTechUiV5';
import { DesktopTimeline } from './components/DesktopTimeline';
import { DesktopTimelineV2 } from './components/DesktopTimelineV2';
import { DesktopReviews } from './components/DesktopReviews';
import { DesktopReviewsV2 } from './components/DesktopReviewsV2';
import { DesktopReviewsV3 } from './components/DesktopReviewsV3';
import { DesktopReviewsV4 } from './components/DesktopReviewsV4';
import { DesktopFaq } from './components/DesktopFaq';
import { DesktopFaqV2 } from './components/DesktopFaqV2';
import { DesktopFaqV3 } from './components/DesktopFaqV3';
import { DesktopFaqV4 } from './components/DesktopFaqV4';
import { DesktopFaqV5 } from './components/DesktopFaqV5';
import { DesktopEcosystemNavigatorV2 } from './components/DesktopEcosystemNavigatorV2';
import { DesktopMiniLabsNavigator } from './components/DesktopMiniLabsNavigator';
import { DesktopMiniLabsNavigatorV2 } from './components/DesktopMiniLabsNavigatorV2';
import { DesktopMicroLabsNavigator } from './components/DesktopMicroLabsNavigator';
import { DesktopWidgetLabsNavigator } from './components/DesktopWidgetLabsNavigator';
import { DesktopSidebar } from './components/DesktopSidebar';
import { DesktopSpeakers } from './components/DesktopSpeakers';
import { DesktopSpeakersV2 } from './components/DesktopSpeakersV2';
import { DesktopSpeakersV3 } from './components/DesktopSpeakersV3';
import { DesktopSpeakersV4 } from './components/DesktopSpeakersV4';
import { DesktopSpeakersV5 } from './components/DesktopSpeakersV5';
import { DesktopSpeakersV6 } from './components/DesktopSpeakersV6';
import { DesktopSpeakersOriginal } from './components/DesktopSpeakersOriginal';
import { DesktopCasesV1 } from './components/DesktopCasesV1';
import { DesktopCasesV2 } from './components/DesktopCasesV2';
import { DesktopCasesV3 } from './components/DesktopCasesV3';
import { DesktopCasesV4 } from './components/DesktopCasesV4';
import { DesktopCasesOriginal } from './components/DesktopCasesOriginal';
import { DesktopPricingV1 } from './components/DesktopPricingV1';
import { DesktopVoxelLogoLab } from './components/DesktopVoxelLogoLab';
import { DesktopPaymentPopup } from './components/DesktopPaymentPopup';
import { DesktopPaymentPopupV0 } from './components/DesktopPaymentPopupV0';
import { DesktopPaymentPopupV2 } from './components/DesktopPaymentPopupV2';
import { DesktopPaymentPopupV3 } from './components/DesktopPaymentPopupV3';
import { DesktopPaymentPopupV4 } from './components/DesktopPaymentPopupV4';
import { DesktopTechUiV6 } from './components/DesktopTechUiV6';
import { DesktopTechUiV7 } from './components/DesktopTechUiV7';
import { DesktopTechUiV8 } from './components/DesktopTechUiV8';
import { DesktopTechUiV9 } from './components/DesktopTechUiV9';
import { DesktopTechUiV10 } from './components/DesktopTechUiV10';
import { DesktopTechUiV12 } from './components/DesktopTechUiV12';
import { DesktopTechUiV13 } from './components/DesktopTechUiV13';
import { DesktopTechUiV14, DesktopTechUiV15, DesktopTechUiV16, DesktopTechUiV17, DesktopTechUiV18 } from './components/DesktopTechUiV14';
import { useState, useEffect } from 'react';

const TAB_IDS = ['program', 'program_main', 'reviews', 'faq', 'navigator', 'speakers', 'cases', 'pricing', 'voxel'] as const;
const BLOCK_HASH_TO_TAB: Array<{ prefix: string; tab: string }> = [
  { prefix: 'program-v', tab: 'program' },
  { prefix: 'program-main-v', tab: 'program_main' },
  { prefix: 'reviews-v', tab: 'reviews' },
  { prefix: 'faq-v', tab: 'faq' },
  { prefix: 'navigator-v', tab: 'navigator' },
  { prefix: 'speakers-v', tab: 'speakers' },
  { prefix: 'cases-v', tab: 'cases' },
  { prefix: 'pricing-v', tab: 'pricing' },
  { prefix: 'voxel-v', tab: 'voxel' },
];

const resolveTabFromHash = (hash: string) => {
  if (hash === 'program-new') return 'program_main';
  if ((TAB_IDS as readonly string[]).includes(hash)) return hash;
  return BLOCK_HASH_TO_TAB.find((entry) => hash.startsWith(entry.prefix))?.tab ?? null;
};

export default function App() {
  const [isPaymentOpenV0, setIsPaymentOpenV0] = useState(false);
  const [isPaymentOpenV1, setIsPaymentOpenV1] = useState(false);
  const [isPaymentOpenV2, setIsPaymentOpenV2] = useState(false);
  const [isPaymentOpenV3, setIsPaymentOpenV3] = useState(false);
  const [isPaymentOpenV4, setIsPaymentOpenV4] = useState(false);

  const [activeTab, setActiveTab] = useState('program');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const nextTab = resolveTabFromHash(hash);
      if (nextTab) setActiveTab(nextTab);
    };
    
    // Check initially
    handleHashChange();
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (!hash) return;

    const timeout = window.setTimeout(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);

    return () => window.clearTimeout(timeout);
  }, [activeTab]);

  const setTab = (tabId: string) => {
    setActiveTab(tabId);
    window.history.replaceState(null, '', `${window.location.pathname}#${tabId}`);
  };

  const TABS = [
    { id: 'program', label: 'Программа до 24.03' },
    { id: 'program_main', label: 'Программа NEW' },
    { id: 'reviews', label: 'Отзывы участников' },
    { id: 'faq', label: 'FAQ' },
    { id: 'navigator', label: 'Labs Navigator' },
    { id: 'speakers', label: 'Спикеры' },
    { id: 'cases', label: 'Кейсы' },
    { id: 'pricing', label: 'Тарифы' },
    { id: 'voxel', label: 'Воксель / Лого' }
  ];

  return (
    <div className="flex min-h-screen bg-[#EAEAEA] font-sans">
      
      {/* Global Sidebar Menu */}
      <DesktopSidebar />

      {/* Main Scrollable Content */}
      <main className="flex-1 w-full min-w-0 py-12">
        <div className="max-w-[1340px] mx-auto px-8 mb-12">
          {/* Payment Popups Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tighter text-black/95 mb-8">ПОП-АПЫ ОПЛАТЫ</h2>
          <div className="flex flex-wrap justify-center gap-4">
          <button onClick={() => setIsPaymentOpenV0(true)} className="px-6 py-4 bg-white border border-black/10 text-black/60 hover:text-black text-xs font-bold uppercase tracking-widest hover:scale-105 transition-all outline-none">
            [V0] ORIGINAL
          </button>
          <button onClick={() => setIsPaymentOpenV1(true)} className="px-6 py-4 bg-white border border-black/10 text-black text-xs font-black uppercase tracking-widest hover:scale-105 transition-all shadow-md">
            [V1] BRUTALIST TECH
          </button>
          <button onClick={() => setIsPaymentOpenV2(true)} className="px-6 py-4 bg-black text-[#8DC63F] text-xs font-black uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_20px_#8DC63F]">
            [V2] NEON GLASSMORPHIC
          </button>
          <button onClick={() => setIsPaymentOpenV3(true)} className="px-6 py-4 bg-gradient-to-r from-white to-[#f5f5f5] rounded-full text-black text-xs font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl">
            [V3] SOFT 3D ANIMATED
          </button>
          <button onClick={() => setIsPaymentOpenV4(true)} className="px-6 py-4 bg-black border-4 border-white text-white text-xs font-black uppercase tracking-widest hover:scale-105 transition-all">
            [V4] SWISS MINIMAL
          </button>
        </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-16 border border-black/10 bg-white/55 px-5 py-5">
          <h2 className="mb-5 text-center text-2xl lg:text-3xl font-black uppercase tracking-tighter text-black/92">
            БЛОКИ САЙТА
          </h2>
        <div className="flex flex-wrap justify-center gap-2 border-t border-black/10 pt-4">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setTab(tab.id)}
              className={`min-w-[11rem] px-5 py-3 font-bold text-xs uppercase tracking-widest transition-colors text-left ${
                activeTab === tab.id 
                  ? 'bg-black text-white' 
                  : 'bg-transparent text-black/50 hover:bg-black/5 hover:text-black'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="w-full">
        {activeTab === 'program' && (
          <div className="pt-8">
            <div id="program-v1">
              <h2 className="text-3xl font-black px-8 pb-12 text-black/90 uppercase tracking-tighter text-center">ПРОГРАММА ДО 24.03</h2>
              <h3 className="text-xl font-bold px-8 pb-4 text-black/40 uppercase tracking-widest text-center">ВЕРСИЯ 1</h3>
              <DesktopTechUiV5 />
            </div>
            
            <div className="flex flex-col gap-32 pt-32">
              <div id="program-v2">
                <h2 className="text-xl font-bold px-8 pb-4 text-black/40 uppercase tracking-widest text-center">ВЕРСИЯ 2</h2>
                <DesktopTechUi />
              </div>
              <div id="program-v3">
                <h2 className="text-xl font-bold px-8 pb-4 text-black/40 uppercase tracking-widest text-center">ВЕРСИЯ 3</h2>
                <DesktopTechUiV4 />
              </div>
              <div id="program-v4">
                <h2 className="text-xl font-bold px-8 pb-4 text-black/40 uppercase tracking-widest text-center">ВЕРСИЯ 4</h2>
                <DesktopTechUiV2 />
              </div>
              <div id="program-v5">
                <h2 className="text-xl font-bold px-8 pb-4 text-black/40 uppercase tracking-widest text-center">ВЕРСИЯ 5</h2>
                <DesktopTimeline />
              </div>
              <div id="program-v6">
                <h2 className="text-xl font-bold px-8 pb-4 text-black/40 uppercase tracking-widest text-center">ВЕРСИЯ 6</h2>
                <DesktopTimelineV2 />
              </div>
              <div id="program-v7">
                <h2 className="text-xl font-bold px-8 pb-4 text-black/40 uppercase tracking-widest text-center">ВЕРСИЯ 7</h2>
                <DesktopTechUiV8 />
              </div>
              <div id="program-v8">
                <h2 className="text-xl font-bold px-8 pb-4 text-black/40 uppercase tracking-widest text-center">ВЕРСИЯ 8</h2>
                <DesktopTechUiV9 />
              </div>
              <div id="program-v9">
                <h2 className="text-xl font-bold px-8 pb-4 text-black/40 uppercase tracking-widest text-center">ВЕРСИЯ 9</h2>
                <DesktopTechUiV10 />
              </div>
              <div id="program-v10">
                <h2 className="text-xl font-bold px-8 pb-4 text-black/40 uppercase tracking-widest text-center">ВЕРСИЯ 10</h2>
                <DesktopTechUiV12 />
              </div>
              <div id="program-v11">
                <h2 className="text-xl font-bold px-8 pb-4 text-black/40 uppercase tracking-widest text-center">ВЕРСИЯ 11</h2>
                <DesktopTechUiV13 />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'program_main' && (
          <div className="flex flex-col gap-32 pt-8 w-full items-center">

            <div id="program-main-v12" className="w-full flex justify-center flex-col items-center">
              <h2 className="text-xl font-bold px-8 pb-4 text-black/40 uppercase tracking-widest text-center">ВЕРСИЯ 12</h2>
              <div className="w-full max-w-[1340px] flex justify-center">
                <DesktopTechUiV18 />
              </div>
            </div>

            <div id="program-main-v13" className="w-full flex justify-center flex-col items-center border-t border-black/10 pt-32">
              <h2 className="text-xl font-bold px-8 pb-4 text-black/40 uppercase tracking-widest text-center">ВЕРСИЯ 13</h2>
              <div className="w-full max-w-[1340px] flex justify-center">
                <DesktopTechUiV16 />
              </div>
            </div>

            <div id="program-main-v14" className="w-full flex justify-center flex-col items-center border-t border-black/10 pt-32">
              <h2 className="text-xl font-bold px-8 pb-4 text-black/40 uppercase tracking-widest text-center">ВЕРСИЯ 14</h2>
              <div className="w-full max-w-[1340px] flex justify-center">
                <DesktopTechUiV17 />
              </div>
            </div>
            
            <div id="program-main-v15" className="w-full flex justify-center flex-col items-center border-t border-black/10 pt-32">
              <h2 className="text-xl font-bold px-8 pb-4 text-black/40 uppercase tracking-widest text-center">ВЕРСИЯ 15</h2>
              <div className="w-full max-w-[1340px] flex justify-center">
                <DesktopTechUiV14 />
              </div>
            </div>

            <div id="program-main-v16" className="w-full flex justify-center flex-col items-center border-t border-black/10 pt-32">
              <h2 className="text-xl font-bold px-8 pb-4 text-black/40 uppercase tracking-widest text-center">ВЕРСИЯ 16</h2>
              <div className="w-full max-w-[1340px] flex justify-center">
                <DesktopTechUiV15 />
              </div>
            </div>

            <div id="program-main-v17" className="w-full flex justify-center flex-col items-center border-t border-black/10 pt-32">
              <h2 className="text-xl font-bold px-8 pb-4 text-black/40 uppercase tracking-widest text-center">ВЕРСИЯ 17</h2>
              <div className="w-full max-w-[1440px] flex justify-center">
                <DesktopTechUiV6 />
              </div>
            </div>

            <div id="program-main-v18" className="w-full flex justify-center flex-col items-center border-t border-black/10 pt-32">
              <h2 className="text-xl font-bold px-8 pb-4 text-black/40 uppercase tracking-widest text-center">ВЕРСИЯ 18</h2>
              <div className="w-full max-w-[1200px] flex justify-center">
                <DesktopTechUiV7 />
              </div>
            </div>

          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="pt-8 flex flex-col gap-24">
            <div id="reviews-v1">
              <h2 className="text-3xl font-black px-8 pb-12 text-[#8DC63F] uppercase tracking-tighter text-center">1. REVIEWS BLOCK</h2>
              <DesktopReviews />
            </div>
            <div id="reviews-v2">
              <h2 className="text-3xl font-black px-8 pb-12 text-black/90 uppercase tracking-tighter text-center">2. REVIEWS BLOCK: LIVE SITE GRID</h2>
              <DesktopReviewsV2 />
            </div>
            <div id="reviews-v4">
              <h2 className="text-3xl font-black px-8 pb-12 text-[#8DC63F] uppercase tracking-tighter text-center">4. REVIEWS BLOCK: CLEAN UI (SCREENSHOT REFERENCE)</h2>
              <DesktopReviewsV4 />
            </div>
            <div id="reviews-v3">
              <h2 className="text-3xl font-black px-8 pb-12 text-black/90 uppercase tracking-tighter text-center">3. REVIEWS BLOCK: LIVE LOGIC / FIXED GRID</h2>
              <DesktopReviewsV3 />
            </div>
          </div>
        )}

        {activeTab === 'faq' && (
          <div className="pt-8 flex flex-col gap-24">
            <div id="faq-v5">
              <h2 className="text-3xl font-black px-8 pb-12 text-[#8DC63F] uppercase tracking-tighter text-center">5. FAQ: LOWERCASE MONO TECH (NEW)</h2>
              <DesktopFaqV5 />
            </div>
            <div id="faq-v4">
              <h2 className="text-3xl font-black px-8 pb-12 text-black/90 uppercase tracking-tighter text-center">4. FAQ: NERD / TERMINAL COMPACT</h2>
              <DesktopFaqV4 />
            </div>
            <div id="faq-v3">
              <h2 className="text-3xl font-black px-8 pb-12 text-black/90 uppercase tracking-tighter text-center">3. FAQ: CALM & CLEAN</h2>
              <DesktopFaqV3 />
            </div>
            <div id="faq-v2">
              <h2 className="text-3xl font-black px-8 pb-12 text-black/90 uppercase tracking-tighter text-center">2. FAQ: COMPACT BRUTAL</h2>
              <DesktopFaqV2 />
            </div>
            <div id="faq-v1">
              <h2 className="text-3xl font-black px-8 pb-12 text-black/90 uppercase tracking-tighter text-center">1. FAQ: BRUTALIST (ORIGINAL)</h2>
              <DesktopFaq />
            </div>
          </div>
        )}

        {activeTab === 'navigator' && (
          <div className="flex flex-col gap-32 pt-8">
            <div className="max-w-[800px] mx-auto text-center px-6">
              <p className="font-mono text-sm text-black/60 bg-black/5 p-4 rounded-md">
                Здесь собраны все итерации блока «Labs Navigator» от самого первого до новейшего компактного виджета. Пролистай вниз, чтобы увидеть их все!
              </p>
            </div>
            
            <div id="navigator-v1">
              <h2 className="text-3xl font-black px-8 pb-12 text-black/30 uppercase tracking-tighter text-center">1. ECOSYSTEM NAVIGATOR (ORIGINAL)</h2>
              <DesktopEcosystemNavigatorV2 />
            </div>
            
            <div id="navigator-v2">
              <h2 className="text-3xl font-black px-8 pb-8 text-[#8DC63F] uppercase tracking-tighter text-center">2. MINI LABS NAVIGATOR (SCROLL)</h2>
              <DesktopMiniLabsNavigator />
            </div>
            
            <div id="navigator-v3">
              {/* No external title: requested internal title */}
              <DesktopMiniLabsNavigatorV2 />
            </div>
            
            <div id="navigator-v4">
              <h2 className="text-3xl font-black px-8 pb-8 text-[#8DC63F] uppercase tracking-tighter text-center">4. MICRO LABS GALLERY (ANIMATED ICONS)</h2>
              <DesktopMicroLabsNavigator />
            </div>
            
            <div id="navigator-v5">
              <h2 className="text-3xl font-black px-8 pb-8 text-[#8DC63F] uppercase tracking-tighter text-center">5. WIDGET LABS NAVIGATOR (IFRAME STYLE)</h2>
              <DesktopWidgetLabsNavigator />
            </div>
          </div>
        )}

        {activeTab === 'speakers' && (
          <div className="pt-8 flex flex-col gap-24 items-center w-full">
            <div id="speakers-v1" className="w-full">
              <h2 className="text-3xl font-black px-8 pb-12 text-black/90 uppercase tracking-tighter text-center">1. СПИКЕРЫ: 5 КОЛОНОК (КВАДРАТНЫЕ)</h2>
              <DesktopSpeakers />
            </div>
            <div id="speakers-v2" className="w-full">
              <h2 className="text-3xl font-black px-8 pb-12 text-[#8DC63F] uppercase tracking-tighter text-center">2. СПИКЕРЫ: 4 КОЛОНКИ (КРУГЛЫЕ)</h2>
              <DesktopSpeakersV2 />
            </div>
            <div id="speakers-v3" className="w-full">
              <h2 className="text-3xl font-black px-8 pb-12 text-black uppercase tracking-tighter text-center">3. СПИКЕРЫ: 4 КОЛОНКИ (КАК НА LIVE SITE, НО ОПИСАНИЯ ВСЕГДА ВИДНЫ)</h2>
              <DesktopSpeakersV3 />
            </div>
            <div id="speakers-v4" className="w-full">
              <h2 className="text-3xl font-black px-8 pb-12 text-[#8DC63F] uppercase tracking-tighter text-center">4. СПИКЕРЫ: БЕЗ 4 КОЛОНОК И БЕЗ ЛИНИИ ПЕРЕД ОПИСАНИЕМ</h2>
              <DesktopSpeakersV4 />
            </div>
            <div id="speakers-v5" className="w-full">
              <h2 className="text-3xl font-black px-8 pb-12 text-black/90 uppercase tracking-tighter text-center">5. СПИКЕРЫ: ПОРТРЕТЫ 2:3 / ТЕКСТ ВСЕГДА СНИЗУ / УГЛОВЫЕ РАМКИ</h2>
              <DesktopSpeakersV5 />
            </div>
            <div id="speakers-v6" className="w-full">
              <h2 className="text-3xl font-black px-8 pb-12 text-[#8DC63F] uppercase tracking-tighter text-center">6. СПИКЕРЫ: 4 КОЛОНКИ (КРУГЛЫЕ, + ТЕКСТ ВНИЗУ)</h2>
              <DesktopSpeakersV6 />
            </div>
            <div id="speakers-v7" className="w-full">
              <h2 className="text-3xl font-black px-8 pb-12 text-black/90 uppercase tracking-tighter text-center">7. СПИКЕРЫ: CURRENT LIVE SITE BLOCK / RELOCATED</h2>
              <DesktopSpeakersOriginal />
            </div>
          </div>
        )}

        {activeTab === 'cases' && (
          <div className="pt-8 flex flex-col gap-24 items-center w-full">
            <div id="cases-v1" className="w-full">
              <h2 className="text-3xl font-black px-8 pb-12 text-black/90 uppercase tracking-tighter text-center">1. КЕЙСЫ: ВЕРТИКАЛЬНЫЕ HOVER-КАРТОЧКИ</h2>
              <DesktopCasesV1 />
            </div>
            <div id="cases-v2" className="w-full">
              <h2 className="text-3xl font-black px-8 pb-12 text-[#8DC63F] uppercase tracking-tighter text-center">2. КЕЙСЫ: БЛИЖЕ К LIVE SITE, НО С ЧИТАЕМОЙ ИЕРАРХИЕЙ</h2>
              <DesktopCasesV2 />
            </div>
            <div id="cases-v3" className="w-full">
              <h2 className="text-3xl font-black px-8 pb-12 text-black/90 uppercase tracking-tighter text-center">3. КЕЙСЫ: КОМПАКТНЫЕ, ТОЛЬКО НАЗВАНИЕ И ОДНА ФРАЗА</h2>
              <DesktopCasesV3 />
            </div>
            <div id="cases-v4" className="w-full">
              <h2 className="text-3xl font-black px-8 pb-12 text-[#8DC63F] uppercase tracking-tighter text-center">4. КЕЙСЫ: КОМПАКТНЫЕ + ТЕГИ СТЕКА</h2>
              <DesktopCasesV4 />
            </div>
            <div id="cases-v5" className="w-full">
              <h2 className="text-3xl font-black px-8 pb-12 text-black/90 uppercase tracking-tighter text-center">5. КЕЙСЫ: CURRENT LIVE SITE / RELOCATED</h2>
              <DesktopCasesOriginal />
            </div>
          </div>
        )}

        {activeTab === 'pricing' && (
          <div className="pt-8 flex flex-col gap-24 items-center w-full">
            <div id="pricing-v1" className="w-full">
              <h2 className="text-3xl font-black px-8 pb-12 text-black/90 uppercase tracking-tighter text-center">1. ТАРИФЫ: ВЕСЬ КОНТЕНТ СРАЗУ ВИДЕН</h2>
              <DesktopPricingV1 />
            </div>
          </div>
        )}

        {activeTab === 'voxel' && (
          <div id="voxel-v1" className="pt-8">
            <h2 className="text-3xl font-black px-8 pb-12 text-black/90 uppercase tracking-tighter text-center">VOXEL LOGO LAB</h2>
            <DesktopVoxelLogoLab />
          </div>
        )}
      </div>

      <DesktopPaymentPopupV0 isOpen={isPaymentOpenV0} onClose={() => setIsPaymentOpenV0(false)} />
      <DesktopPaymentPopup isOpen={isPaymentOpenV1} onClose={() => setIsPaymentOpenV1(false)} />
        <DesktopPaymentPopupV2 isOpen={isPaymentOpenV2} onClose={() => setIsPaymentOpenV2(false)} />
        <DesktopPaymentPopupV3 isOpen={isPaymentOpenV3} onClose={() => setIsPaymentOpenV3(false)} />
        <DesktopPaymentPopupV4 isOpen={isPaymentOpenV4} onClose={() => setIsPaymentOpenV4(false)} />
      </main>
    </div>
  );
}
