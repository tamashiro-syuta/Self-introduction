//タブ
(() => {
    //ここに命令を書く（グローバル汚染を防ぐ＝グローバル関数が他の関数にぶつからなくなる）

    //document = WebページのDOM全体を取得する（ DOM = HTMLページを構成する要素）
    //変数に「＄」をつける　＝　DOM要素
    const $doc = document;
    const $tab = $doc.getElementById('js-tab');

    //DOM要素の中から（' '）内の条件に当てはまるDOMを取得する（ここではdata-navがついたもの）
    const $nav = $tab.querySelectorAll('[data-nav]');

    const $content = $tab.querySelectorAll('[data-content]');

    const ACTIVE_CLASS = 'is-active';
    const navLen = $nav.length;

    //初期化
    const init = () => {
        $content[0].style.display = 'block';  //contentの1つ目のCSSのdisplayをブロックする
    };
    init();

    //クリックしたら起こるイベント
    const handleClicked = (e) => {
        e.preventDefault();  //aタグのリンク要素を無効化させる

        //クリックされたnavとそのdataを取得
        const $this = e.target;  //targetは、クリックされた要素のDOM要素を取得する　→→→　e.targetにすると今クリックされた要素をピンポイントで取得
        const targetVal = $this.dataset.nav;  //dataset は、そのDOM要素のデータ属性をとる（今回ならdata属性のnav要素を持つものが取れる）

        //対象外のnav、contentを全てリセットする
        let index = 0;
        while(index < navLen) {
            $content[index].style.display ='none';
            $nav[index].classList.remove(ACTIVE_CLASS);
            index++;
        }

        //対象のコンテンツをアクティブ化する
        $tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = 'block';
        $nav[targetVal].classList.add(ACTIVE_CLASS);

    };

    //全nav要素に対して関数を適用する・発火
    let index = 0;
    while (index < navLen) {
    $nav[index].addEventListener('click',(e) => handleClicked(e) );
    index++ ;
    }


}) ();