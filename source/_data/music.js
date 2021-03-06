<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.css">
<div id="aplayer"></div>
<script src="https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/color-thief-don@2.0.2/src/color-thief.js"></script>
<script> 
const ap = new APlayer({ 
container: document.getElementById('aplayer'),
autoplay: false, //自动播放
listFolded: true, //播放列表默认折叠
listMaxHeight: 70, //播放列表最大高度
order: 'list', //音频循环顺序, 可选值: 'list', 'random'
loop: 'all', //音频循环播放, 可选值: 'all', 'one', 'none'
theme: '#e9e9e9', //切换音频时的主题色，优先级低于audio.theme
preload: 'auto', //音频预加载，可选值: 'none', 'metadata', 'auto'
mutex: true, //互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
lrcType: 3, //歌词格式，可选值：3（LRC文件歌词格式），1（JS字符串歌词格式）
volume: 0.7, //默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
fixed: false , //吸底模式（fixed:true），迷你模式（mini:true），普通模式（注释此行或者设置fixed:false）
audio: [{
        name: '这是我一生中最勇敢的瞬间',
        artist: '棱镜',
        lrc: '/downloads/lrc/平凡之路-朴树.lrc',
        cover: 'http://p2.music.126.net/W_5XiCv3rGS1-J7EXpHSCQ==/18885211718782327.jpg?param=300x300',
        url: 'http://music.163.com/song/media/outer/url?id=1366216050.mp3'
    },
    ]
});
</script>
