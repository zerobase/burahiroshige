const _stories = {
  1: {
    id: 1,
    title: '日本橋で散財三昧！お江戸日本橋を遊びつくす',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Hiroshige_le_pont_Nihonbashi_%C3%A0_l%27aube.jpg/640px-Hiroshige_le_pont_Nihonbashi_%C3%A0_l%27aube.jpg',
    imageCaption: '「東海道五十三次之内 日本橋」歌川広重筆。明六ツに日本橋を渡る大名行列',
    imageCredit: 'Hiroshige [Public domain]',
    description: 'ビジネスと商業の中心地、交通の中心地として栄える日本橋、江戸時代は東海道の起点としてまさに江戸の商都としての顔を見せる場所でした。今日は豊かな町娘の気分になって、1日日本橋界隈で散財をしてみましょう。'
  },
  2: {
    id: 2,
    title: '品川ゲートウェイシティ',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Takanawa_Gateway_Station_201905a.jpg/800px-Takanawa_Gateway_Station_201905a.jpg',
    imageCaption: '高輪ゲートウェイ駅建設状況（2019年5月16日撮影）',
    imageCredit: '江戸村のとくぞう [CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0)]',
    description: '元々は、目黒川の下流から河口付近一帯の地域を指して品川と言った。近代になって、品川駅がこれよりかなり北側に開業したため、現在の品川の心象的地理は、港区の駅周辺を含めた地域まで拡大している。品川の名前の由来は、目黒川の別名であるとする説、高輪に対して品ヶ輪とした説など様々あり、はっきりとしたことはよく分からない。(Wikipedia)'
  }
}

const _spots = {
  1: {
    storyID: 1,
    id: 1,
    title: '日本橋三越本店',
    lead: '実は云々かんぬん……',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Mitsukoshi_Nihonbashi_main_store_4.jpg/800px-Mitsukoshi_Nihonbashi_main_store_4.jpg',
    imageCaption: '日本橋三越本店（国の重要文化財:2018年撮影）',
    imageCredit: 'Kakidai [CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0)]',
    location: null,
    description: '商号の「三越」は、三井家の「三井」と創業時の「越後屋」からとったもので、1904年に「合名会社三井呉服店」から「株式会社三越呉服店」へ改称した際からのものである。1935年に竣工した日本橋本店は、国の重要文化財に指定されている[1][2]。現在の同店のキャッチフレーズは、「飾る日も 飾らない日も 三越と」、「This is Japan」。(Wikipedia)'
  },
  2: {
    storyID: 1,
    id: 2,
    title: '日本橋三越本店',
    lead: '実は云々かんぬん……',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Mitsukoshi_Nihonbashi_main_store_4.jpg/800px-Mitsukoshi_Nihonbashi_main_store_4.jpg',
    imageCaption: '日本橋三越本店（国の重要文化財:2018年撮影）',
    imageCredit: 'Kakidai [CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0)]',
    location: null,
    description: '商号の「三越」は、三井家の「三井」と創業時の「越後屋」からとったもので、1904年に「合名会社三井呉服店」から「株式会社三越呉服店」へ改称した際からのものである。1935年に竣工した日本橋本店は、国の重要文化財に指定されている[1][2]。現在の同店のキャッチフレーズは、「飾る日も 飾らない日も 三越と」、「This is Japan」。(Wikipedia)'
  },
  3: {
    storyID: 2,
    id: 3,
    title: '日本橋三越本店',
    lead: '実は云々かんぬん……',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Mitsukoshi_Nihonbashi_main_store_4.jpg/800px-Mitsukoshi_Nihonbashi_main_store_4.jpg',
    imageCaption: '日本橋三越本店（国の重要文化財:2018年撮影）',
    imageCredit: 'Kakidai [CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0)]',
    location: null,
    description: '商号の「三越」は、三井家の「三井」と創業時の「越後屋」からとったもので、1904年に「合名会社三井呉服店」から「株式会社三越呉服店」へ改称した際からのものである。1935年に竣工した日本橋本店は、国の重要文化財に指定されている[1][2]。現在の同店のキャッチフレーズは、「飾る日も 飾らない日も 三越と」、「This is Japan」。(Wikipedia)'
  },
  4: {
    storyID: 2,
    id: 4,
    title: '日本橋三越本店',
    lead: '実は云々かんぬん……',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Mitsukoshi_Nihonbashi_main_store_4.jpg/800px-Mitsukoshi_Nihonbashi_main_store_4.jpg',
    imageCaption: '日本橋三越本店（国の重要文化財:2018年撮影）',
    imageCredit: 'Kakidai [CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0)]',
    location: null,
    description: '商号の「三越」は、三井家の「三井」と創業時の「越後屋」からとったもので、1904年に「合名会社三井呉服店」から「株式会社三越呉服店」へ改称した際からのものである。1935年に竣工した日本橋本店は、国の重要文化財に指定されている[1][2]。現在の同店のキャッチフレーズは、「飾る日も 飾らない日も 三越と」、「This is Japan」。(Wikipedia)'
  }
}

export default {
  stories: _stories,
  spots: _spots
}
