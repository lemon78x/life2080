import Link from "next/link";

const services = [
  { path: "/services/age-calculator", name: "만 나이 계산기" },
  { path: "/services/salary-calculator", name: "연봉 실수령액 계산기" },
  { path: "/services/tax-calculator", name: "연말정산/세금 계산기" },
  { path: "/services/marriage-cost", name: "결혼 준비 비용 가이드" },
  { path: "/services/mortgage-calculator", name: "주택 담보 대출 이자 계산기" },
  { path: "/services/compound-interest", name: "목돈 마련 복리 계산기" },
  { path: "/services/health-checkup", name: "연령별 필수 건강검진 가이드" },
  { path: "/services/retirement-planner", name: "은퇴 자금 계산기" },
  { path: "/services/pension-calc", name: "국민연금 예상 수령액 계산기" },
  { path: "/services/inheritance-tax", name: "상속세 및 증여세 계산기" },
];

export default function ServicesPage() {
  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">전체 서비스 목록</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((s) => (
          <li key={s.path}>
            <Link href={s.path} className="block p-4 border rounded hover:bg-muted transition-colors">
              {s.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
