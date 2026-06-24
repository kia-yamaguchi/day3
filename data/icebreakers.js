/** 全100件。各ネタの filters は [内容, 形式, 時間, 人数] の4要素（ボタンと同一文言）。 */

export const CONTENT_TYPES = [
  "会話系",
  "ゲーム系",
  "共有系",
  "協力系",
  "思考系",
  "軽アクティビティ系",
];

export const FORMAT_TYPES = ["対面", "オンライン"];

export const TIME_RANGES = ["〜5分", "5〜10分", "10〜15分", "15分〜"];

export const PEOPLE_RANGES = [
  "〜5人",
  "5〜10人",
  "10〜15人",
  "15〜30人",
  "30人〜",
];

export const categoryButtons = [
  { label: "会話系", filterKey: "会話系", group: "内容" },
  { label: "ゲーム系", filterKey: "ゲーム系", group: "内容" },
  { label: "共有系", filterKey: "共有系", group: "内容" },
  { label: "協力系", filterKey: "協力系", group: "内容" },
  { label: "思考系", filterKey: "思考系", group: "内容" },
  { label: "軽アクティビティ系", filterKey: "軽アクティビティ系", group: "内容" },
  { label: "対面", filterKey: "対面", group: "形式" },
  { label: "オンライン", filterKey: "オンライン", group: "形式" },
  { label: "〜5分", filterKey: "〜5分", group: "時間" },
  { label: "5〜10分", filterKey: "5〜10分", group: "時間" },
  { label: "10〜15分", filterKey: "10〜15分", group: "時間" },
  { label: "15分〜", filterKey: "15分〜", group: "時間" },
  { label: "〜5人", filterKey: "〜5人", group: "人数" },
  { label: "5〜10人", filterKey: "5〜10人", group: "人数" },
  { label: "10〜15人", filterKey: "10〜15人", group: "人数" },
  { label: "15〜30人", filterKey: "15〜30人", group: "人数" },
  { label: "30人〜", filterKey: "30人〜", group: "人数" },
];

const DETAILED = [
  {
    id: "ib-1",
    popular: true,
    title: "ワンワード・チェックイン",
    description:
      "順番に一言だけ共有する定番。今の気分や今日のテーマに関する単語を述べ合い、場の温度をそろえます。ハンドサインやチャット吹き出しでもOK。",
    keywords: ["会話系", "オンライン", "〜5分", "〜5人"],
    filters: ["会話系", "オンライン", "〜5分", "〜5人"],
  },
  {
    id: "ib-2",
    popular: true,
    title: "二つの真実と一つの嘘",
    description:
      "自分に関する文を3つ用意し、そのうち1つだけ嘘にするチームビルディング。興味が広がり、自然と自己開示が進みます。",
    keywords: ["ゲーム系", "対面", "5〜10分", "5〜10人"],
    filters: ["ゲーム系", "対面", "5〜10分", "5〜10人"],
  },
  {
    id: "ib-3",
    popular: true,
    title: "共通点サークル",
    description:
      "ペアやチームで「意外な共通点」をいくつか見つけて発表。学年や専攻を超えた接点が見つかりやすくなります。",
    keywords: ["協力系", "対面", "〜5分", "10〜15人"],
    filters: ["協力系", "対面", "〜5分", "10〜15人"],
  },
  {
    id: "ib-4",
    popular: true,
    title: "チャット絵文字チェックイン",
    description:
      "ビデオ会議のチャットに今の気分を絵文字で投稿。発言が苦手な人も参加しやすく、画面越しでも一体感が出ます。",
    keywords: ["会話系", "オンライン", "〜5分", "15〜30人"],
    filters: ["会話系", "オンライン", "〜5分", "15〜30人"],
  },
  {
    id: "ib-5",
    popular: true,
    title: "バーチャル背景カード・ツアー",
    description:
      "任意でバーチャル背景を設定し、おすすめの一枚を短く紹介。リモートでも「場所」の話題で笑いが生まれます。",
    keywords: ["共有系", "オンライン", "5〜10分", "〜5人"],
    filters: ["共有系", "オンライン", "5〜10分", "〜5人"],
  },
  {
    id: "ib-6",
    popular: true,
    title: "ブレインライティング・リレー",
    description:
      "お題に対し紙や共有ドキュメントを回しながらアイデアを連鎖。批判なしのルールで発想の量を稼げます。",
    keywords: ["思考系", "対面", "10〜15分", "10〜15人"],
    filters: ["思考系", "対面", "10〜15分", "10〜15人"],
  },
  {
    id: "ib-7",
    popular: true,
    title: "ザクザク投票",
    description:
      "手を挙げたりリアクションで瞬間投票。賛否がはっきりしない場の「空気」を軽く可視化できます。",
    keywords: ["ゲーム系", "対面", "〜5分", "30人〜"],
    filters: ["ゲーム系", "対面", "〜5分", "30人〜"],
  },
  {
    id: "ib-8",
    popular: true,
    title: "一言ハイライト",
    description:
      "セミナーや合宿の終わりに、今日の学びや印象を一言ずつ。クロージングの安心感と振り返りが同時に得られます。",
    keywords: ["共有系", "対面", "〜5分", "30人〜"],
    filters: ["共有系", "対面", "〜5分", "30人〜"],
  },
];

const STYLE_WORDS = [
  "チェックイン",
  "ライトニング・シェア",
  "ペアディスカッション",
  "ミニ投票",
  "ストーリー連鎖",
  "マシュマロ・タイム",
  "共通点マッチング",
  "記憶ワンマッチ",
  "シェアサークル",
  "絵文字チャット",
  "名前バッジ",
  "イントロダクション・バンプ",
  "ワールドマップ",
  "写真ペア・マッチ",
  "質問ジェネレーター",
  "フォーチュン・シェア",
  "ミニディベート",
  "タイムカプセル",
  "チーム名ビンゴ",
  "一言ビジュアル",
  "ハイライト・リレー",
  "ミート・アンド・グリート",
  "アイスブレイク・ビンゴ",
  "ソーシャル・スタイル",
  "記憶の連鎖",
  "ミニワークショップ",
];

const SCENE_WORDS = [
  "サークル初回",
  "ゼミの冒頭",
  "新歓キックオフ",
  "オンライン飲み会",
  "ハイブリッド教室",
  "プロジェクト初日",
  "合宿オープニング",
  "研究室ミーティング",
];

const DESC_SNIPPETS = [
  "ファシリテーターの進行で時間内に収めやすく、初対面のグループにも向きます。",
  "発言量がばらつく場でも、ルールがシンプルなので迷いにくいです。",
  "オンラインではチャット・ブレイクアウト・ホワイトボードと組み合わせやすい構成です。",
  "心理的安全性を損なわないよう、任意参加や匿名オプションも設計しやすいネタです。",
  "人数が増えても進行の型が崩れにくく、短時間で一体感をつくりやすいです。",
];

function buildGenerated(n) {
  const i = n - 1;
  const k = n - 9;
  const filters = [
    CONTENT_TYPES[i % 6],
    FORMAT_TYPES[i % 2],
    TIME_RANGES[i % 4],
    PEOPLE_RANGES[i % 5],
  ];
  const scene = SCENE_WORDS[(i * 3) % SCENE_WORDS.length];
  const title = STYLE_WORDS[k % STYLE_WORDS.length];
  const description = `${scene}で使える短時間アイスブレイクです。${DESC_SNIPPETS[i % DESC_SNIPPETS.length]} 所要時間の目安は「${filters[2]}」、想定人数は「${filters[3]}」です。`;
  const keywords = [...filters];
  return {
    id: `ib-${n}`,
    popular: false,
    title,
    description,
    keywords,
    filters,
  };
}

const generated = Array.from({ length: 92 }, (_, idx) =>
  buildGenerated(idx + 9),
);

export const allIcebreakers = [...DETAILED, ...generated];

export function filterIcebreakers(items, filterKey) {
  return items.filter((item) => item.filters.includes(filterKey));
}

export const popularIcebreakers = allIcebreakers.filter((x) => x.popular);
