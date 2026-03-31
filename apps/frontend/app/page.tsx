import Link from "next/link";
import { 
  Calculator, 
  Wallet, 
  ReceiptText, 
  HeartHandshake, 
  Home as HomeIcon, 
  TrendingUp, 
  Stethoscope, 
  Palmtree, 
  PiggyBank, 
  Landmark 
} from "lucide-react";

const services = [
  { 
    path: "/services/age-calculator", 
    name: "만 나이 계산기", 
    description: "헷갈리는 내 나이, 정확하게 계산해보세요",
    icon: Calculator,
    color: "from-blue-400 to-cyan-400"
  },
  { 
    path: "/services/salary-calculator", 
    name: "연봉 실수령액 계산", 
    description: "4대보험, 세금 떼고 내 통장에 꽂히는 진짜 금액",
    icon: Wallet,
    color: "from-green-400 to-emerald-400"
  },
  { 
    path: "/services/tax-calculator", 
    name: "연말정산/세금 계산", 
    description: "13월의 월급? 폭탄? 미리 확인하는 연말정산",
    icon: ReceiptText,
    color: "from-pink-400 to-rose-400"
  },
  { 
    path: "/services/marriage-cost", 
    name: "결혼 준비 비용 가이드", 
    description: "스드메부터 예식장까지, 예산 플래닝",
    icon: HeartHandshake,
    color: "from-purple-400 to-fuchsia-400"
  },
  { 
    path: "/services/mortgage-calculator", 
    name: "주택 담보 대출 계산", 
    description: "내 집 마련의 첫걸음, 이자 및 상환액 계산",
    icon: HomeIcon,
    color: "from-orange-400 to-amber-400"
  },
  { 
    path: "/services/compound-interest", 
    name: "목돈 마련 복리 계산", 
    description: "시간의 마법, 복리로 불어나는 내 자산",
    icon: TrendingUp,
    color: "from-indigo-400 to-blue-500"
  },
  { 
    path: "/services/health-checkup", 
    name: "연령별 필수 건강검진", 
    description: "20대부터 80대까지 놓치지 말아야 할 검진",
    icon: Stethoscope,
    color: "from-red-400 to-pink-500"
  },
  { 
    path: "/services/retirement-planner", 
    name: "은퇴 자금 계산기", 
    description: "여유로운 노후를 위해 필요한 자금은?",
    icon: Palmtree,
    color: "from-yellow-400 to-orange-500"
  },
  { 
    path: "/services/pension-calc", 
    name: "국민연금 예상 수령액", 
    description: "내가 낸 연금, 나중에 얼마나 받을 수 있을까?",
    icon: PiggyBank,
    color: "from-teal-400 to-emerald-500"
  },
  { 
    path: "/services/inheritance-tax", 
    name: "상속세/증여세 계산", 
    description: "가족을 위한 준비, 복잡한 세금 미리 계산하기",
    icon: Landmark,
    color: "from-violet-400 to-purple-500"
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center p-8 md:p-24 overflow-hidden bg-slate-950 text-slate-50">
      {/* Background Ambient Blobs for Glassmorphism */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-purple-600/30 blur-[100px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute top-[40%] right-[-10%] w-[30vw] h-[30vw] rounded-full bg-blue-600/20 blur-[100px] animate-pulse" style={{ animationDuration: '10s' }} />
        <div className="absolute bottom-[-10%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-pink-600/20 blur-[120px] animate-pulse" style={{ animationDuration: '12s' }} />
      </div>

      <div className="z-10 w-full max-w-6xl flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text font-semibold tracking-wide text-sm">
              All-in-One Life Services
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Life <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">2080</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            20대 사회초년생부터 80대 은퇴까지.<br className="hidden md:block" />
            인생의 매 순간 필요한 현명한 계산과 가이드.
          </p>
        </div>

        {/* Glassmorphism Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full pb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            // 빈 공간을 채우기 위해 마지막 아이템의 레이아웃을 조정할 수 있습니다
            const isLast = index === services.length - 1;
            
            return (
              <Link 
                href={service.path} 
                key={service.path}
                className={`group relative flex flex-col justify-between p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden ${isLast && services.length % 3 === 1 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                {/* Hover Gradient Glow Effect */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${service.color}`} />
                
                <div className="relative z-10">
                  <div className={`inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className="w-8 h-8 text-white drop-shadow-md" />
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-3 tracking-wide text-slate-100 group-hover:text-white transition-colors">
                    {service.name}
                  </h2>
                  
                  <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors line-clamp-2">
                    {service.description}
                  </p>
                </div>
                
                <div className="relative z-10 mt-6 flex items-center text-sm font-medium text-slate-400 group-hover:text-white transition-colors">
                  <span>시작하기</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </main>
  );
}
