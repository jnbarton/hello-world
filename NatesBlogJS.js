//Crime Analysis slideshow from 2016 Citizen's Academy
var images = [
    'https://image-private.slidesharecdn.com/5e05b3d6-69d8-4496-9fd1-24d2da54d1b6-161104183021/95/slide-2-1024.jpg?hdnea=acl=/5e05b3d6-69d8-4496-9fd1-24d2da54d1b6-161104183021/95/slide-2-1024.jpg*~exp=1512652643~hmac=cd8ad5c10606e4286e6fb24eafc500b3d374810aa066a9ca03e5a98875091c00&cb=1478284229', 
    'https://image-private.slidesharecdn.com/5e05b3d6-69d8-4496-9fd1-24d2da54d1b6-161104183021/95/slide-3-1024.jpg?hdnea=acl=/5e05b3d6-69d8-4496-9fd1-24d2da54d1b6-161104183021/95/slide-3-1024.jpg*~exp=1512652643~hmac=73d5a0b1fb0326a6f670e98ae9547882a6d73a3b6c021bf84722a491419e804f&cb=1478284229', 
    'https://image-private.slidesharecdn.com/5e05b3d6-69d8-4496-9fd1-24d2da54d1b6-161104183021/95/slide-4-1024.jpg?hdnea=acl=/5e05b3d6-69d8-4496-9fd1-24d2da54d1b6-161104183021/95/slide-4-1024.jpg*~exp=1512652643~hmac=3cd5a62a08821c6fc6999f76146e4f07ee84d5bc5755ff832f9425a234a08ce8&cb=1478284229', 
    'https://image-private.slidesharecdn.com/5e05b3d6-69d8-4496-9fd1-24d2da54d1b6-161104183021/95/slide-5-1024.jpg?hdnea=acl=/5e05b3d6-69d8-4496-9fd1-24d2da54d1b6-161104183021/95/slide-5-1024.jpg*~exp=1512652643~hmac=3beb0a15329fb8429041fbf30ad3b70636ad90ef9cd5ac764d4eba3fdf1df766&cb=1478284229', 
    'https://image-private.slidesharecdn.com/5e05b3d6-69d8-4496-9fd1-24d2da54d1b6-161104183021/95/slide-8-1024.jpg?hdnea=acl=/5e05b3d6-69d8-4496-9fd1-24d2da54d1b6-161104183021/95/slide-8-1024.jpg*~exp=1512653211~hmac=3289c952f1009ecb6d810497d35fa24408ef751f15220b456d34dc3ace5ec57f&cb=1478284229',
    'https://image-private.slidesharecdn.com/5e05b3d6-69d8-4496-9fd1-24d2da54d1b6-161104183021/95/slide-9-1024.jpg?hdnea=acl=/5e05b3d6-69d8-4496-9fd1-24d2da54d1b6-161104183021/95/slide-9-1024.jpg*~exp=1512653211~hmac=5b2f41b7e5e5cebbc5f6decd367c43efe21e8c828b70f752cc174973a884b0f2&cb=1478284229',
    'https://image-private.slidesharecdn.com/5e05b3d6-69d8-4496-9fd1-24d2da54d1b6-161104183021/95/slide-10-1024.jpg?hdnea=acl=/5e05b3d6-69d8-4496-9fd1-24d2da54d1b6-161104183021/95/slide-10-1024.jpg*~exp=1512653211~hmac=2ccb48b4c2352cf266da98e98124bb7d124d7ad63f38a8dd02ce0fc6d33738e4&cb=1478284229',
    'https://image-private.slidesharecdn.com/5e05b3d6-69d8-4496-9fd1-24d2da54d1b6-161104183021/95/slide-11-1024.jpg?hdnea=acl=/5e05b3d6-69d8-4496-9fd1-24d2da54d1b6-161104183021/95/slide-11-1024.jpg*~exp=1512653211~hmac=c2c8b27fde079344f7aaaf27598382e6b6792c6e6aa497943fbc0bc5b6a4b417&cb=1478284229',
    'https://image-private.slidesharecdn.com/5e05b3d6-69d8-4496-9fd1-24d2da54d1b6-161104183021/95/slide-12-1024.jpg?hdnea=acl=/5e05b3d6-69d8-4496-9fd1-24d2da54d1b6-161104183021/95/slide-12-1024.jpg*~exp=1512653211~hmac=86b61df05f1332250400ea122b81d75bcb829c752ba8a59a1f28c910936b7f24&cb=1478284229',
    'https://image-private.slidesharecdn.com/5e05b3d6-69d8-4496-9fd1-24d2da54d1b6-161104183021/95/slide-13-1024.jpg?hdnea=acl=/5e05b3d6-69d8-4496-9fd1-24d2da54d1b6-161104183021/95/slide-13-1024.jpg*~exp=1512653211~hmac=a5cb9adc6bdf87b00225eaf264c7086ec1761ebafac011f1c1076e9807470b01&cb=1478284229', 
    'https://image-private.slidesharecdn.com/5e05b3d6-69d8-4496-9fd1-24d2da54d1b6-161104183021/95/slide-14-1024.jpg?hdnea=acl=/5e05b3d6-69d8-4496-9fd1-24d2da54d1b6-161104183021/95/slide-14-1024.jpg*~exp=1512653211~hmac=d0c88dd96df76a287813291a2a5e8a3b6a7c42e09202b341981ee81eb0a84004&cb=1478284229',
    'https://image-private.slidesharecdn.com/5e05b3d6-69d8-4496-9fd1-24d2da54d1b6-161104183021/95/slide-15-1024.jpg?hdnea=acl=/5e05b3d6-69d8-4496-9fd1-24d2da54d1b6-161104183021/95/slide-15-1024.jpg*~exp=1512653211~hmac=c11c6cad8e07dc50d7b10754e429c23bba1435849b2908124e107f8eda66b6a3&cb=1478284229',
    'https://image-private.slidesharecdn.com/5e05b3d6-69d8-4496-9fd1-24d2da54d1b6-161104183021/95/slide-17-1024.jpg?hdnea=acl=/5e05b3d6-69d8-4496-9fd1-24d2da54d1b6-161104183021/95/slide-17-1024.jpg*~exp=1512653211~hmac=9ca3fee9b0b1d537bb08978407bb862a25606798ca842f972098ad8843417a62&cb=1478284229',
    'https://image-private.slidesharecdn.com/5e05b3d6-69d8-4496-9fd1-24d2da54d1b6-161104183021/95/slide-18-1024.jpg?hdnea=acl=/5e05b3d6-69d8-4496-9fd1-24d2da54d1b6-161104183021/95/slide-18-1024.jpg*~exp=1512653211~hmac=77251139c1952e79e50122714b9b784c008c2a8f9ca47240692da485a00f7b8f&cb=1478284229',
    'https://image-private.slidesharecdn.com/5e05b3d6-69d8-4496-9fd1-24d2da54d1b6-161104183021/95/slide-19-1024.jpg?hdnea=acl=/5e05b3d6-69d8-4496-9fd1-24d2da54d1b6-161104183021/95/slide-19-1024.jpg*~exp=1512653211~hmac=e8a878b3aeac8d0f024b6b1857f196f4612498cbd0063f44b3ea6c9cfca66d51&cb=1478284229',
    'https://image-private.slidesharecdn.com/5e05b3d6-69d8-4496-9fd1-24d2da54d1b6-161104183021/95/slide-20-1024.jpg?hdnea=acl=/5e05b3d6-69d8-4496-9fd1-24d2da54d1b6-161104183021/95/slide-20-1024.jpg*~exp=1512653211~hmac=3733781e407744f82a6ba907b90bd24db50112d2914aadd6386c36ecab072cab&cb=1478284229',
    'https://image-private.slidesharecdn.com/5e05b3d6-69d8-4496-9fd1-24d2da54d1b6-161104183021/95/slide-21-1024.jpg?hdnea=acl=/5e05b3d6-69d8-4496-9fd1-24d2da54d1b6-161104183021/95/slide-21-1024.jpg*~exp=1512653211~hmac=7706148b1e8d5d48c04dc24f84df654cc5f46aa5afe6454bc3501d957611b47e&cb=1478284229',
    'https://image-private.slidesharecdn.com/5e05b3d6-69d8-4496-9fd1-24d2da54d1b6-161104183021/95/slide-22-1024.jpg?hdnea=acl=/5e05b3d6-69d8-4496-9fd1-24d2da54d1b6-161104183021/95/slide-22-1024.jpg*~exp=1512653211~hmac=9c63e16f0d17f83703870190af5bffbae8bac7fe934c1e3cf403649771596539&cb=1478284229',
    'https://image-private.slidesharecdn.com/5e05b3d6-69d8-4496-9fd1-24d2da54d1b6-161104183021/95/slide-23-1024.jpg?hdnea=acl=/5e05b3d6-69d8-4496-9fd1-24d2da54d1b6-161104183021/95/slide-23-1024.jpg*~exp=1512653211~hmac=da9e6627fe5fdb2123eab18b6f68afb684194d51825fcc69f7c0ca55d77c1a50&cb=1478284229',
    'https://image-private.slidesharecdn.com/5e05b3d6-69d8-4496-9fd1-24d2da54d1b6-161104183021/95/slide-24-1024.jpg?hdnea=acl=/5e05b3d6-69d8-4496-9fd1-24d2da54d1b6-161104183021/95/slide-24-1024.jpg*~exp=1512653211~hmac=45fdf5626685799ed83b70db3ff24b1f1a5986ce8cd6808741c548407cf07b1b&cb=1478284229',
    'https://image-private.slidesharecdn.com/5e05b3d6-69d8-4496-9fd1-24d2da54d1b6-161104183021/95/slide-25-1024.jpg?hdnea=acl=/5e05b3d6-69d8-4496-9fd1-24d2da54d1b6-161104183021/95/slide-25-1024.jpg*~exp=1512653211~hmac=9e34f1158858517d52af128be078d99df53ddf078433256f711e073323ac8153&cb=1478284229',
    'https://image-private.slidesharecdn.com/5e05b3d6-69d8-4496-9fd1-24d2da54d1b6-161104183021/95/slide-26-1024.jpg?hdnea=acl=/5e05b3d6-69d8-4496-9fd1-24d2da54d1b6-161104183021/95/slide-26-1024.jpg*~exp=1512653211~hmac=5ca363a771b4fb58ed8542daec4ecda91f85c91cd52e9590c8a2d24a8053841b&cb=1478284229',
    'https://image-private.slidesharecdn.com/5e05b3d6-69d8-4496-9fd1-24d2da54d1b6-161104183021/95/slide-27-1024.jpg?hdnea=acl=/5e05b3d6-69d8-4496-9fd1-24d2da54d1b6-161104183021/95/slide-27-1024.jpg*~exp=1512653211~hmac=4b41ecf0166d3645c3cd3ee5a394c122fbf706b70d8b01750c5503f1f92753f2&cb=1478284229',
    'https://image-private.slidesharecdn.com/5e05b3d6-69d8-4496-9fd1-24d2da54d1b6-161104183021/95/slide-28-1024.jpg?hdnea=acl=/5e05b3d6-69d8-4496-9fd1-24d2da54d1b6-161104183021/95/slide-28-1024.jpg*~exp=1512653211~hmac=0d4507534156af27396d3d4ffaf3c011d6c5ac8150be651e0cbd6a9dc2902e4c&cb=1478284229',
    ];
var num = 0;
function next() {
    var slider = document.getElementById('slider');
    num++;
    if(num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}
function prev() {
    var slider = document.getElementById('slider');
    num--;
    if(num < 0) {
        num = images.length-1;
    }
    slider.src = images[num];
}