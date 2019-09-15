const _stories = {
  1: {
    id: 1,
    title: '日本橋で豪遊ザンマイ！お江戸日本橋を遊びつくす',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Hiroshige_le_pont_Nihonbashi_%C3%A0_l%27aube.jpg/640px-Hiroshige_le_pont_Nihonbashi_%C3%A0_l%27aube.jpg',
    imageCaption: '「東海道五十三次之内 日本橋」歌川広重筆。明六ツに日本橋を渡る大名行列',
    imageCredit: 'Hiroshige [Public domain]',
    description: 'ビジネスと商業の中心地、交通の中心地として栄える日本橋、江戸時代は東海道の起点としてまさに江戸の商都としての顔を見せる場所でした。今日は豊かな町娘の気分になって、1日日本橋界隈で散財をしてみましょう。'
  }
}

/**
 * spots: {
 *   #: {
 *     storyID: #,
 *     id: #,
 *     title: '',
 *     lead: '',
 *     description: '',
 *     position: [#.#, #.#],
 *     image: {
 *       type: 'raw', // raw, iiif
 *       url: 'https://'
 *     }
 *   }
 * }
 */

const _spots = {
  1: {
    storyID: 1,
    id: 1,
    title: 'イントロ',
    description: '日本橋は越後屋や白木屋をはじめとした商いの街として有名でした。江戸に住む町娘、おたきとふみの仲良し二人組が日本橋で過ごす１日を覗いてみましょう。'
  },
  2: {
    storyID: 1,
    id: 2,
    title: '魚河岸',
    lead: '魚河岸を出入りする魚河岸衆',
    description: '｢ふみ、今日は１日遊び倒すわよ｣｢まずはどこへいくの？｣｢五ツ半刻だからまだ越後屋もあいてない時間よね｣｢うーん、すぐ近くだから魚河岸見に行かない？｣｢いいわね！｣｢ほら、あそこに魚河岸から出てきた振り売りがいるわよ｣｢見てあの脚、かっこいいーあんな人と付き合えたらなぁ｣｢私は火消しのが好きかなぁ｣｢えー魚河岸衆のがかっこいいでしょ｣',
    position: [35.687443, 139.773451],
    image: {
      type: 'raw', // raw, iiif
      url: 'https://www.arc.ritsumei.ac.jp/archive01/theater/image/PB/kunitachi/80/80-1461.jpg'
    }
  },
  3: {
    storyID: 1,
    id: 3,
    title: '魚河岸',
    lead: '魚河岸で売られている魚',
    description: '｢魚河岸といえば魚よね｣｢魚かぁ…今の季節ならうなぎとか？｣｢昨日の夕餉、うなぎだったわね｣｢うらやましいー昨日の夕餉は鯉よ｣｢鯉もおいしいじゃない｣',
    position: [35.684393, 139.774932],
    image: {
      type: 'raw', // raw, iiif
      url: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Yoshitoshi_The_Giant_Carp.jpg'
    }
  },
  4: {
    storyID: 1,
    id: 4,
    title: '越後屋',
    lead: 'かんざし',
    description: '｢越後屋による前に新しいかんざしがほしいから見ていっていきたいのよね｣｢いいわよ、時間まだあるし｣ ｢このかんざし、べっこうでかわいい｣｢値段もそんなに高くないし買っちゃえば？｣｢こっちのも漆でかわいい、こっちも…うーん…どっちがいいと思う？｣｢漆かなぁ｣｢じゃあこれください｣',
    position: [35.686433, 139.773888],
    image: {
      type: 'raw', // raw, iiif
      url: 'https://colbase.nich.go.jp/uploads/collection_item_images/thumbnail/0d47a54bc0dbfead39b888bccf3c779d.jpg'
    }
  },
  5: {
    storyID: 1,
    id: 5,
    title: '越後屋',
    lead: '流行りの着物',
    description: '｢いらっしゃい、今日はどんなのをお探しで｣｢そろそろ冬ものの袷がほしいんだけど、冬にオススメのものはどれ？｣｢冬用なら水仙とか、あとこの縞とかどうですかね｣｢もう少し明るい色がいいわね｣｢雪模様のこれはどうです？｣｢うーん、ふみ、これどう？｣｢似合うんじゃない？｣｢柄が大きすぎない？｣｢おたきの顔なら似合うわよ｣',
    position: [35.686433, 139.773888]
  },
  6: {
    storyID: 1,
    id: 6,
    title: '越後屋',
    lead: '江戸の美人',
    description: '｢あーあ、あたしが高嶋屋おひさみたいな絶世の美人だったらこんなに迷わないのに｣｢これだけ着物があると悩むし仕方ないわよ｣｢ふみは気に入ったのないの？｣｢あたしはこの羽織を買うつもり｣｢橙でかわいいわね｣｢でしょう？｣',
    position: [35.686433, 139.773888],
    image: {
      type: 'raw', // raw, iiif
      url: 'https://www.arc.ritsumei.ac.jp/archive01/theater/image/PB/zuroku/Z0168/Z0168-483.jpg'
    }
  },
  7: {
    storyID: 1,
    id: 7,
    title: '中村座',
    lead: '歌舞伎の演目',
    description: '｢日本橋といえば越後屋と中村座よね｣｢今日の演目はなんだっけ？｣｢本朝廿四孝って書いてあるわ｣｢八重垣姫が一途で素敵な演目かぁ｣｢あんな恋愛してみたいよね｣｢どうせ恋人にするなら助六みたいな素敵な人がいいなぁ｣',
    position: [35.675383, 139.768888],
    image: {
      type: 'raw', // raw, iiif
      url: 'http://mfas3.s3.amazonaws.com/objects/SC127498.jpg'
    }
  },
  8: {
    storyID: 1,
    id: 8,
    title: '中村座',
    lead: 'イケメン役者',
    description: '｢助六といえば市川團十郎の助六を見てみたいの｣｢豊国の役者絵かっこいいもんね｣｢豊国のもいいけど国貞のもかっこいいのよ、見たことある？｣｢ええ、もちろん！昔の役者だけど三代目市川八百蔵のも絵もかっこよくてオススメよ｣',
    position: [35.675383, 139.768888],
    image: {
      type: 'raw', // raw, iiif
      url: 'https://www.arc.ritsumei.ac.jp/archive01/theater/image/PB/kunitachi/80/80-1077.jpg'
    }
  },
  9: {
    storyID: 1,
    id: 9,
    title: '食事',
    lead: '寿司',
    description: '｢観劇したらお腹すいちゃった｣｢なにか食べる？｣｢このあたりならなんでもあるから目移りしちゃう｣｢お寿司に天ぷら、あとそばとうなぎのどれかかな｣｢帰りに千疋屋で果物買って帰りましょ｣｢いいわね、きっと家族も喜ぶわ｣｢じゃあ今日は天ぷらの気分だから、天ぷら食べて帰りましょう｣｢そうね、キスの天ぷらが食べたいなぁ｣',
    position: [35.676882, 139.770122],
    image: {
      type: 'raw', // raw, iiif
      url: 'http://www9.nhk.or.jp/das/image/D0004500/D0004500414_00000_S_001.jpg'
    }
  },
  10: {
    storyID: 1,
    id: 10,
    title: '街のこと',
    description: '｢今日は楽しかったね｣｢色々見たし買ったし、楽しかったよ｣｢日本橋を満喫した！って感じね｣｢うんうん。また一緒に遊びに来よう！｣｢もちろん！｣',
    position: [35.684115, 139.77451]
  }
}

export default {
  stories: _stories,
  spots: _spots
}
