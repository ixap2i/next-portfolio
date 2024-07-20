export default function Experience() {
  return(
    <section id="experience" className="py-12 md:py-24 lg:py-32 bg-muted">
      <div className="px-4 md:px-6 space-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Experience</h2>
          <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
            これまでの職務経歴(外観)です。
          </p>
        </div>
        <div className="flex justify-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-background rounded-lg overflow-hidden shadow-lg">
            <div className="p-4">
              <h3 className="text-lg font-bold">Webアプリケーションエンジニア</h3>
              <p className="mt-2 text-muted-foreground">Xbit(for now) | 2017 - Present</p>
              <ul className="mt-4 list-disc pl-4 text-muted-foreground">
                <li>シフトメーションサービスの保守・運用の後、Corporate ITを経験しております。</li>
                <li>
                  バックエンドはRuby on Rails、フロントエンドはVue3を使用しております。
                </li>
                <li>
                  事業会社の新機能開発・保守を担当しております。
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-background rounded-lg overflow-hidden shadow-lg">
            <div className="p-4">
              <h3 className="text-lg font-bold">デバッガー</h3>
              <p className="mt-2 text-muted-foreground">ALH株式会社 | 2016 - 2017</p>
              <ul className="mt-4 list-disc pl-4 text-muted-foreground">
                <li>
                  社会福祉法人を退職後、独学でJavaを勉強し、SES会社に就職しました。
                </li>
                <li>JUnit, Java3 / 8を使用したデバッグ中心の業務に携わりました。</li>
                <li>金融系商品、通信会社のお客様先の経験があります。</li>
              </ul>
            </div>
          </div>
          <div className="bg-background rounded-lg overflow-hidden shadow-lg">
            <div className="p-4">
              <h3 className="text-lg font-bold">社会福祉士</h3>
              <p className="mt-2 text-muted-foreground">社会福祉法人幸会 | 2015 - 2016</p>
              <ul className="mt-4 list-disc pl-4 text-muted-foreground">
                <li>
                  4年生の専門学校を卒業後、生活支援員/就労支援員として社会福祉法人に勤務しました。
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}