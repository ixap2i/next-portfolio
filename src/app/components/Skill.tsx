export default function Skill() {
  return(
    <section id="skills" className="py-12 md:py-24 lg:py-32">
      <div className="px-4 md:px-6 space-y-12">
        <div className="c">
          <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Skills</h2>
          <p className="text-center mt-4 text-muted-foreground md:text-xl/relaxed">
            取り扱うことのできる言語一覧です。
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="bg-muted rounded-lg p-4 flex flex-col items-center">
            <HashIcon className="h-12 w-12 text-primary" />
            <h3 className="mt-4 text-lg font-bold">HTML</h3>
            <p className="mt-2 text-muted-foreground text-sm">
              構造的なマークアップを記述することが可能です。
            </p>
          </div>
          <div className="bg-muted rounded-lg p-4 flex flex-col items-center">
            <CodepenIcon className="h-12 w-12 text-primary" />
            <h3 className="mt-4 text-lg font-bold">CSS</h3>
            <p className="mt-2 text-muted-foreground text-sm">
              レスポンシブデザインに対応することが可能です。
            </p>
          </div>
          <div className="bg-muted rounded-lg p-4 flex flex-col items-center">
            <CodepenIcon className="h-12 w-12 text-primary" />
            <h3 className="mt-4 text-lg font-bold">JavaScript</h3>
            <p className="mt-2 text-muted-foreground text-sm">
              JavaScriptを中心とした、モダンなフレームワークを取り扱うことが可能です。
            </p>
          </div>
          <div className="bg-muted rounded-lg p-4 flex flex-col items-center">
            <CodepenIcon className="h-12 w-12 text-primary" />
            <h3 className="mt-4 text-lg font-bold">Ruby</h3>
            <p className="mt-2 text-muted-foreground text-sm">
              テスト駆動開発、APIの設計と実装が可能です。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
};

function HashIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="9" y2="9" />
      <line x1="4" x2="20" y1="15" y2="15" />
      <line x1="10" x2="8" y1="3" y2="21" />
      <line x1="16" x2="14" y1="3" y2="21" />
    </svg>
  )
};

function CodepenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" x2="12" y1="22" y2="15.5" />
      <polyline points="22 8.5 12 15.5 2 8.5" />
      <polyline points="2 15.5 12 8.5 22 15.5" />
      <line x1="12" x2="12" y1="2" y2="8.5" />
    </svg>
  )
};
