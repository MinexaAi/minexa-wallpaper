const PLACEHOLDER_IMAGES = [

  { id:1, url:'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=compress&cs=tinysrgb&w=600', title:'Alpine Serenity', category:'nature', tags:['mountains','snow','nature'], downloads:1420, likes:89, byMe:false, liked:false, resolution:'3840×2160', size:'4.2 MB' },
  { id:2, url:'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=compress&cs=tinysrgb&w=600', title:'Purple Galaxy', category:'space', tags:['galaxy','purple','universe'], downloads:2100, likes:142, byMe:false, liked:false, resolution:'5120×2880', size:'6.1 MB' },
  { id:3, url:'https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=compress&cs=tinysrgb&w=600', title:'Chromatic Waves', category:'others', tags:['colors','gradient','abstract'], downloads:876, likes:61, byMe:false, liked:false, resolution:'2560×1440', size:'3.8 MB' },
  { id:4, url:'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=compress&cs=tinysrgb&w=600', title:'City at Dusk', category:'city', tags:['skyline','urban','night'], downloads:1650, likes:113, byMe:false, liked:false, resolution:'4096×2160', size:'5.4 MB' },
  { id:5, url:'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=compress&cs=tinysrgb&w=600', title:'Forest Mist', category:'nature', tags:['forest','nature','fog','trees'], downloads:990, likes:77, byMe:false, liked:false, resolution:'3840×2160', size:'4.0 MB' },
  
  { id:6, url:'https://images.pexels.com/photos/6985003/pexels-photo-6985003.jpeg?auto=compress&cs=tinysrgb&w=600', title:'Red Digital Art', category:'others', tags:['red','digital','modern'], downloads:3101, likes:201, byMe:false, liked:false, resolution:'2560×1440', size:'3.9 MB' },
  { id:7, url:'https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?auto=compress&cs=tinysrgb&w=600', title:'prunus mume', category:'nature', tags:['tree','pink','nature'], downloads:1200, likes:95, byMe:false, liked:false, resolution:'3840×2160', size:'3.5 MB' },
  { id:8, url:'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=compress&cs=tinysrgb&w=600', title:'light', category:'others', tags:['background','light'], downloads:1800, likes:129, byMe:false, liked:false, resolution:'5120×2880', size:'7.2 MB' },
  { id:9, url:'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=compress&cs=tinysrgb&w=600', title:'Dog in the Park', category:'others', tags:['dog','simple','comedy'], downloads:670, likes:52, byMe:false, liked:false, resolution:'3840×2160', size:'4.8 MB' },
  { id:10, url:'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=compress&cs=tinysrgb&w=600', title:'sky', category:'space', tags:['sky','galaxy','stars','space'], downloads:2300, likes:187, byMe:false, liked:false, resolution:'3840×2160', size:'5.0 MB' },

  { id:11, url:'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?auto=compress&cs=tinysrgb&w=600', title:'cut animal', category:'others', tags:['cut','animal','lights'], downloads:1980, likes:166, byMe:false, liked:false, resolution:'4096×2160', size:'5.8 MB' },
  { id:12, url:'https://images.unsplash.com/photo-1494548162494-384bba4ab999?auto=compress&cs=tinysrgb&w=600', title:'sunrise', category:'nature', tags:['sun','mountain','light'], downloads:320, likes:29, byMe:false, liked:false, resolution:'2560×1440', size:'0.8 MB' },
  { id:13, url:'https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&w=600', title:'Mountain Reflection', category:'nature', tags:['mountains','lake','nature'], downloads:5421, likes:392, byMe:false, liked:false, resolution:'3840×2160', size:'5.1 MB' },
  { id:14, url:'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=600', title:'Cyber City', category:'nature', tags:['city','neon','night'], downloads:4310, likes:288, byMe:false, liked:false, resolution:'5120×2880', size:'6.4 MB' },
  { id:15, url:'https://images.pexels.com/photos/110854/pexels-photo-110854.jpeg?auto=compress&cs=tinysrgb&w=600', title:'space from earth', category:'space', tags:['space','sky','stars','galaxy'], downloads:6388, likes:511, byMe:false, liked:false, resolution:'3840×2160', size:'4.9 MB' },

  { id:16, url:'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=600', title:'Mountain Peak', category:'nature', tags:['mountains','sky','view'], downloads:2981, likes:177, byMe:false, liked:false, resolution:'2560×1440', size:'3.8 MB' },
  { id:17, url:'https://images.pexels.com/photos/210182/pexels-photo-210182.jpeg?auto=compress&cs=tinysrgb&w=600', title:'Ferrari Night Drive', category:'cars', tags:['ferrari','cars','night'], downloads:7820, likes:623, byMe:false, liked:false, resolution:'3840×2160', size:'5.7 MB' },
  { id:18, url:'https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&w=600', title:'stars in the sky', category:'space', tags:['nature','night','dark'], downloads:2154, likes:140, byMe:false, liked:false, resolution:'2560×1440', size:'2.9 MB' },
  { id:19, url:'https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=600', title:'Golden Desert', category:'nature', tags:['nature','desert','sand','sunset'], downloads:3891, likes:240, byMe:false, liked:false, resolution:'3840×2160', size:'4.6 MB' },
  { id:20, url:'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=600', title:'Neon Samurai', category:'technology', tags:['anime','samurai','neon'], downloads:9342, likes:711, byMe:false, liked:false, resolution:'2560×1440', size:'4.2 MB' },

  { id:21, url:'https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?auto=compress&cs=tinysrgb&w=600', title:'Future Skyline', category:'others', tags:['white','simple','background'], downloads:5102, likes:389, byMe:false, liked:false, resolution:'5120×2880', size:'7.2 MB' },
  { id:22, url:'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=600', title:'Frozen Forest', category:'nature', tags:['forest','snow','trees'], downloads:3270, likes:198, byMe:false, liked:false, resolution:'3840×2160', size:'4.4 MB' },
  { id:23, url:'https://images.pexels.com/photos/1274260/pexels-photo-1274260.jpeg?auto=compress&cs=tinysrgb&w=600', title:'glaxy', category:'space', tags:['space','sky','stars','galaxy'], downloads:2988, likes:176, byMe:false, liked:false, resolution:'2560×1440', size:'3.5 MB' },
  { id:24, url:'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=600', title:'Lamborghini Storm', category:'cars', tags:['lamborghini','supercar','rain'], downloads:8842, likes:745, byMe:false, liked:false, resolution:'3840×2160', size:'5.9 MB' },
  { id:25, url:'https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg?auto=compress&cs=tinysrgb&w=600', title:'luminouse street', category:'city', tags:['city','street','lights'], downloads:4901, likes:331, byMe:false, liked:false, resolution:'5120×2880', size:'7.0 MB' },

  { id:26, url:'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=600', title:'Ocean Silence', category:'nature', tags:['nature','water','waves','blue'], downloads:4150, likes:267, byMe:false, liked:false, resolution:'3840×2160', size:'4.8 MB' },
  { id:27, url:'https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&w=600', title:'Dark Coding', category:'technology', tags:['code','coding vibe','design','office'], downloads:2690, likes:160, byMe:false, liked:false, resolution:'2560×1440', size:'3.6 MB' },
  { id:28, url:'https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&w=600', title:'devil car', category:'cars', tags:['sport','car','aura'], downloads:10231, likes:820, byMe:false, liked:false, resolution:'3840×2160', size:'6.3 MB' },
  { id:29, url:'https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=600', title:'Silent Dunes', category:'nature', tags:['desert','nature','sky'], downloads:5388, likes:412, byMe:false, liked:false, resolution:'3840×2160', size:'5.0 MB' },
  { id:30, url:'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=600', title:'blue river', category:'nature', tags:['snow','forest','mountain'], downloads:4680, likes:304, byMe:false, liked:false, resolution:'3840×2160', size:'6.0 MB' },

  { id:31, url:'https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg?auto=compress&cs=tinysrgb&w=600', title:'Aurora Peaks', category:'nature', tags:['aurora','mountains','night'], downloads:6121, likes:451, byMe:false, liked:false, resolution:'3840×2160', size:'5.3 MB' },
  { id:32, url:'https://images.pexels.com/photos/3214114/pexels-photo-3214114.jpeg?auto=compress&cs=tinysrgb&w=600', title:'Beautiful flowers', category:'nature', tags:['flower','red','yellow'], downloads:7310, likes:522, byMe:false, liked:false, resolution:'5120×2880', size:'6.7 MB' },
  { id:33, url:'https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&w=600', title:'Starfall Sky', category:'space', tags:['stars','milkyway','sky'], downloads:4881, likes:319, byMe:false, liked:false, resolution:'3840×2160', size:'4.5 MB' },
  { id:34, url:'https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?auto=compress&cs=tinysrgb&w=600', title:'luminous forest', category:'nature', tags:['tree','light','live'], downloads:2740, likes:188, byMe:false, liked:false, resolution:'2560×1440', size:'3.4 MB' },
  { id:35, url:'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=600', title:'McLaren Thunder', category:'cars', tags:['mclaren','orange','speed'], downloads:8540, likes:710, byMe:false, liked:false, resolution:'3840×2160', size:'5.8 MB' },

  { id:36, url:'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=600', title:'laptop', category:'technology', tags:['gaming','rpg','laptop'], downloads:6740, likes:490, byMe:false, liked:false, resolution:'2560×1440', size:'4.0 MB' },
  { id:37, url:'https://images.pexels.com/photos/7919/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600', title:'hidden forest', category:'nature', tags:['fog','forest','sunrise'], downloads:5980, likes:401, byMe:false, liked:false, resolution:'3840×2160', size:'5.2 MB' },
  { id:38, url:'https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&w=600', title:'night city', category:'city', tags:['beautiful','skyscrapers','modern'], downloads:2100, likes:133, byMe:false, liked:false, resolution:'2560×1440', size:'2.8 MB' },
  { id:39, url:'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=600', title:'Crystal Ocean', category:'nature', tags:['nature','ocean','water','island'], downloads:4551, likes:302, byMe:false, liked:false, resolution:'3840×2160', size:'4.7 MB' },
  { id:40, url:'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=600', title:'Night Metropolis', category:'city', tags:['city','buildings','night'], downloads:6901, likes:544, byMe:false, liked:false, resolution:'5120×2880', size:'7.1 MB' },

  { id:41, url:'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=600', title:'Forest River', category:'nature', tags:['nature','forest','river','green'], downloads:3980, likes:244, byMe:false, liked:false, resolution:'3840×2160', size:'4.4 MB' },
  { id:42, url:'https://images.pexels.com/photos/2310641/pexels-photo-2310641.jpeg?auto=compress&cs=tinysrgb&w=600', title:'Canadian Forest', category:'nature', tags:['fog','forest','tree','natural'], downloads:2801, likes:177, byMe:false, liked:false, resolution:'2560×1440', size:'3.7 MB' },
  { id:43, url:'https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=600', title:'Red Ferrari', category:'cars', tags:['car','ferrari','red','luxury'], downloads:7720, likes:603, byMe:false, liked:false, resolution:'3840×2160', size:'5.6 MB' },
  { id:44, url:'https://images.pexels.com/photos/934063/pexels-photo-934063.jpeg?auto=compress&cs=tinysrgb&w=600', title:'outfit', category:'others', tags:['clothes','shirt','glasses'], downloads:5200, likes:355, byMe:false, liked:false, resolution:'5120×2880', size:'6.8 MB' },
  { id:45, url:'https://images.pexels.com/photos/1723637/pexels-photo-1723637.jpeg?auto=compress&cs=tinysrgb&w=600', title:'crescent moon', category:'nature', tags:['night','forest','moon'], downloads:9210, likes:771, byMe:false, liked:false, resolution:'3840×2160', size:'6.2 MB' },

  { id:46, url:'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=600', title:'Sunrise Valley', category:'nature', tags:['sunrise','valley','fog'], downloads:4102, likes:261, byMe:false, liked:false, resolution:'3840×2160', size:'4.6 MB' },
  { id:47, url:'https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=600', title:'Digital Waves', category:'others', tags:['waves','3d','modern'], downloads:2600, likes:149, byMe:false, liked:false, resolution:'2560×1440', size:'3.3 MB' },
  { id:48, url:'https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&w=600', title:'BMW Shadow', category:'cars', tags:['bmw','luxury','black'], downloads:8012, likes:640, byMe:false, liked:false, resolution:'3840×2160', size:'5.9 MB' },
  { id:49, url:'https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&w=600', title:'Deep Cosmos', category:'space', tags:['cosmos','stars','nebula'], downloads:6011, likes:441, byMe:false, liked:false, resolution:'5120×2880', size:'7.3 MB' },
  { id:50, url:'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=600', title:'Ocean Cliffs', category:'nature', tags:['cliffs','sea','nature'], downloads:4320, likes:288, byMe:false, liked:false, resolution:'3840×2160', size:'4.8 MB' },

  { id:51, url:'https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&w=600', title:'Urban Shadows', category:'city', tags:['urban','dark','lights'], downloads:6201, likes:471, byMe:false, liked:false, resolution:'5120×2880', size:'6.9 MB' },
  { id:52, url:'https://images.pexels.com/photos/949194/pexels-photo-949194.jpeg?auto=compress&cs=tinysrgb&w=600', title:'Cherry Blossom Night', category:'nature', tags:['anime','japan','flowers'], downloads:7822, likes:688, byMe:false, liked:false, resolution:'2560×1440', size:'4.5 MB' },
  { id:53, url:'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600', title:'RGB Setup', category:'technology', tags:['gaming','rgb','pc'], downloads:5690, likes:410, byMe:false, liked:false, resolution:'3840×2160', size:'5.4 MB' },
  { id:54, url:'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=600', title:'skyscrapers', category:'city', tags:['clouds','sky','high'], downloads:1980, likes:121, byMe:false, liked:false, resolution:'2560×1440', size:'2.7 MB' },
  { id:55, url:'https://images.pexels.com/photos/164041/pexels-photo-164041.jpeg?auto=compress&cs=tinysrgb&w=600', title:'Island Escape', category:'nature', tags:['island','water','beach'], downloads:4870, likes:329, byMe:false, liked:false, resolution:'3840×2160', size:'4.9 MB' },

  { id:56, url:'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=600', title:'Skyscraper Glow', category:'city', tags:['skyscraper','lights','modern'], downloads:6410, likes:500, byMe:false, liked:false, resolution:'5120×2880', size:'7.4 MB' },
  { id:57, url:'https://images.pexels.com/photos/1933316/pexels-photo-1933316.jpeg?auto=compress&cs=tinysrgb&w=600', title:'Autumn Road', category:'nature', tags:['autumn','road','trees'], downloads:3700, likes:215, byMe:false, liked:false, resolution:'3840×2160', size:'4.1 MB' },
  { id:58, url:'https://images.pexels.com/photos/7130555/pexels-photo-7130555.jpeg?auto=compress&cs=tinysrgb&w=600', title:'Cyber Grid', category:'others', tags:['grid','future','purple'], downloads:8891, likes:734, byMe:false, liked:false, resolution:'3840×2160', size:'6.1 MB' },
  { id:59, url:'https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&w=600', title:'Infinite Universe', category:'space', tags:['universe','stars','dark'], downloads:5900, likes:428, byMe:false, liked:false, resolution:'5120×2880', size:'7.0 MB' },
  { id:60, url:'https://images.pexels.com/photos/355321/pexels-photo-355321.jpeg?auto=compress&cs=tinysrgb&w=600', title:'Northern Lights Valley', category:'nature', tags:['aurora','valley','night'], downloads:5842, likes:427, byMe:false, liked:false, resolution:'3840×2160', size:'5.4 MB' },

  { id:61, url:'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=600', title:'Misty Mountains', category:'nature', tags:['mountains','mist','forest'], downloads:5231, likes:382, byMe:false, liked:false, resolution:'3840×2160', size:'5.2 MB' },
  { id:62, url:'https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&w=600', title:'Night Racer', category:'nature', tags:['sports car','night','speed'], downloads:8120, likes:677, byMe:false, liked:false, resolution:'3840×2160', size:'5.9 MB' },
  { id:63, url:'https://images.pexels.com/photos/220201/pexels-photo-220201.jpeg?auto=compress&cs=tinysrgb&w=600', title:'Blue Planet', category:'space', tags:['planet','space','stars'], downloads:6120, likes:455, byMe:false, liked:false, resolution:'5120×2880', size:'7.1 MB' },
  { id:64, url:'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&w=600', title:'Clean Zone', category:'nature', tags:['river','mountain','forest','natural'], downloads:9450, likes:801, byMe:false, liked:false, resolution:'3840×2160', size:'6.4 MB' },
  { id:65, url:'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=600', title:'Zoom In', category:'nature', tags:['mushroom','butterflies','forest'], downloads:2410, likes:154, byMe:false, liked:false, resolution:'2560×1440', size:'3.0 MB' },

  { id:66, url:'https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600', title:'Railway', category:'nature', tags:['railway','forest','old'], downloads:4882, likes:337, byMe:false, liked:false, resolution:'3840×2160', size:'4.8 MB' },
  { id:67, url:'https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=600', title:'Urban Lights', category:'city', tags:['city','lights','street'], downloads:7022, likes:566, byMe:false, liked:false, resolution:'5120×2880', size:'7.2 MB' },
  { id:68, url:'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600', title:'Anime Warrior', category:'technology', tags:['anime','warrior','moon'], downloads:8311, likes:710, byMe:false, liked:false, resolution:'2560×1440', size:'4.6 MB' },
  { id:69, url:'https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg?auto=compress&cs=tinysrgb&w=600', title:'Gaming Neon Room', category:'technology', tags:['gaming','setup','rgb'], downloads:6204, likes:448, byMe:false, liked:false, resolution:'3840×2160', size:'5.5 MB' },
  { id:70, url:'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=600', title:'Color Explosion', category:'technology', tags:['colors','abstract','paint'], downloads:3321, likes:219, byMe:false, liked:false, resolution:'2560×1440', size:'3.8 MB' },

  { id:71, url:'https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg?auto=compress&cs=tinysrgb&w=600', title:'Snowy Cabin', category:'nature', tags:['snow','cabin','winter'], downloads:4450, likes:301, byMe:false, liked:false, resolution:'3840×2160', size:'4.7 MB' },
  { id:72, url:'https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=600', title:'Mercedes AMG GT Coupe', category:'cars', tags:['car','mercedes','yellow','luxury'], downloads:9211, likes:784, byMe:false, liked:false, resolution:'3840×2160', size:'6.0 MB' },
  { id:73, url:'https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=600', title:'Galaxy', category:'space', tags:['galaxy','purple','universe'], downloads:6411, likes:490, byMe:false, liked:false, resolution:'5120×2880', size:'7.3 MB' },
  { id:74, url:'https://images.pexels.com/photos/316902/pexels-photo-316902.jpeg?auto=compress&cs=tinysrgb&w=600', title:'night city', category:'city', tags:['night','city','lights'], downloads:9781, likes:845, byMe:false, liked:false, resolution:'3840×2160', size:'6.5 MB' },
  { id:75, url:'https://images.pexels.com/photos/129731/pexels-photo-129731.jpeg?auto=compress&cs=tinysrgb&w=600', title:'Dark Simplicity', category:'others', tags:['dark','simple','minimal'], downloads:2280, likes:141, byMe:false, liked:false, resolution:'2560×1440', size:'2.8 MB' },

  { id:76, url:'https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=600', title:'ocean sunset', category:'nature', tags:['ocean','sunset','natural view'], downloads:5201, likes:360, byMe:false, liked:false, resolution:'3840×2160', size:'5.0 MB' },
  { id:77, url:'https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg?auto=compress&cs=tinysrgb&w=600', title:'Downtown Skyline', category:'city', tags:['skyline','city','modern'], downloads:7105, likes:580, byMe:false, liked:false, resolution:'5120×2880', size:'7.4 MB' },
  { id:78, url:'https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=600', title:'Anime Sunset', category:'technology', tags:['anime','sunset','dream'], downloads:8420, likes:729, byMe:false, liked:false, resolution:'2560×1440', size:'4.4 MB' },
  { id:79, url:'https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg?auto=compress&cs=tinysrgb&w=600', title:'movie vibe', category:'technology', tags:['movie','tv','netflix'], downloads:6488, likes:477, byMe:false, liked:false, resolution:'3840×2160', size:'5.7 MB' },
  { id:80, url:'https://images.pexels.com/photos/2119706/pexels-photo-2119706.jpeg?auto=compress&cs=tinysrgb&w=600', title:'Digital Smoke', category:'others', tags:['smoke','digital','art'], downloads:3490, likes:228, byMe:false, liked:false, resolution:'2560×1440', size:'3.9 MB' },

  { id:81, url:'https://images.pexels.com/photos/5728978/pexels-photo-5728978.jpeg?auto=compress&cs=tinysrgb&w=600', title:'Lake Reflection', category:'nature', tags:['lake','reflection','forest'], downloads:4700, likes:312, byMe:false, liked:false, resolution:'3840×2160', size:'4.9 MB' },
  { id:82, url:'https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=600', title:'Mercedes Vision', category:'cars', tags:['mercedes','luxury','black'], downloads:8655, likes:730, byMe:false, liked:false, resolution:'3840×2160', size:'5.8 MB' },
  { id:83, url:'https://images.pexels.com/photos/23769/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600', title:'space flight', category:'space', tags:['space','rocket','stars'], downloads:6580, likes:502, byMe:false, liked:false, resolution:'5120×2880', size:'7.0 MB' },
  { id:84, url:'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600', title:'developer office', category:'technology', tags:['office','desk','computer'], downloads:9950, likes:870, byMe:false, liked:false, resolution:'3840×2160', size:'6.6 MB' },
  { id:85, url:'https://images.pexels.com/photos/1809644/pexels-photo-1809644.jpeg?auto=compress&cs=tinysrgb&w=600', title:'hidden zone', category:'nature', tags:['mountain','fog','sunset','nature'], downloads:9120, likes:781, byMe:false, liked:false, resolution:'3840×2160', size:'6.3 MB' },

  { id:86, url:'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=600', title:'Deep Blue Sea', category:'nature', tags:['deep sea','blue','waves'], downloads:5301, likes:377, byMe:false, liked:false, resolution:'3840×2160', size:'5.1 MB' },
  { id:87, url:'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=600', title:'City Reflections', category:'city', tags:['city','reflection','night'], downloads:7220, likes:592, byMe:false, liked:false, resolution:'5120×2880', size:'7.5 MB' },
  { id:88, url:'https://images.pexels.com/photos/1367192/pexels-photo-1367192.jpeg?auto=compress&cs=tinysrgb&w=600', title:'tropical forest', category:'nature', tags:['tropical','forest','jungle','fog'], downloads:8712, likes:760, byMe:false, liked:false, resolution:'2560×1440', size:'4.7 MB' },
  { id:89, url:'https://images.pexels.com/photos/9072216/pexels-photo-9072216.jpeg?auto=compress&cs=tinysrgb&w=600', title:'gaming vibe', category:'technology', tags:['gaming','esports','rgb'], downloads:6721, likes:490, byMe:false, liked:false, resolution:'3840×2160', size:'5.8 MB' },
  { id:90, url:'https://images.pexels.com/photos/2317711/pexels-photo-2317711.jpeg?auto=compress&cs=tinysrgb&w=600', title:'Liquid Colors', category:'others', tags:['liquid','colors','abstract'], downloads:3588, likes:240, byMe:false, liked:false, resolution:'2560×1440', size:'4.0 MB' },

  { id:91, url:'https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=600', title:'tropical forest', category:'nature', tags:['fog','forest','tree','natural'], downloads:4991, likes:345, byMe:false, liked:false, resolution:'3840×2160', size:'5.0 MB' },
  { id:92, url:'https://images.pexels.com/photos/1166643/pexels-photo-1166643.jpeg?auto=compress&cs=tinysrgb&w=600', title:'white room', category:'others', tags:['office','lamp','light'], downloads:6438, likes:498, byMe:false, liked:false, resolution:'5120×2880', size:'7.1 MB' },
  { id:93, url:'https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&w=600', title:'Earth From Space', category:'space', tags:['earth','space','planet'], downloads:6840, likes:530, byMe:false, liked:false, resolution:'5120×2880', size:'7.2 MB' },
  { id:94, url:'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=600', title:'canva picture ready to cut', category:'others', tags:['woman','canva','cut'], downloads:10022, likes:889, byMe:false, liked:false, resolution:'3840×2160', size:'6.7 MB' },
  { id:95, url:'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=600', title:'server room', category:'technology', tags:['server','room','technology'], downloads:2610, likes:172, byMe:false, liked:false, resolution:'2560×1440', size:'3.0 MB' },

  { id:96, url:'https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=600', title:'Sunset Coast', category:'nature', tags:['ocean','sunset','coast','beach'], downloads:5481, likes:390, byMe:false, liked:false, resolution:'3840×2160', size:'5.2 MB' },
  { id:97, url:'https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600', title:'Glass Towers', category:'city', tags:['glass','towers','urban'], downloads:7344, likes:611, byMe:false, liked:false, resolution:'5120×2880', size:'7.6 MB' },
  { id:98, url:'https://images.pexels.com/photos/1295138/pexels-photo-1295138.jpeg?auto=compress&cs=tinysrgb&w=600', title:'sea wave', category:'nature', tags:['wave','sea','natural'], downloads:8901, likes:788, byMe:false, liked:false, resolution:'2560×1440', size:'4.8 MB' },
  { id:99, url:'https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=600', title:'Hidden Waterfall', category:'nature', tags:['waterfall','forest','river'], downloads:4728, likes:336, byMe:false, liked:false, resolution:'3840×2160', size:'5.0 MB' },
  { id:100, url:'https://images.pexels.com/photos/1570264/pexels-photo-1570264.jpeg?auto=compress&cs=tinysrgb&w=600', title:'Abstract Neon Rings', category:'others', tags:['rings','neon','abstract'], downloads:3720, likes:258, byMe:false, liked:false, resolution:'2560×1440', size:'4.1 MB' },

  { id:101, url:'https://i.ibb.co/tMmKTZjj/c86e957a327b.jpg?auto=compress&cs=tinysrgb&w=600', title:'Anime Hero', category:'anime', tags:['anime','old anime'], downloads:3720, likes:258, byMe:false, liked:false, resolution:'5926×3951', size:'4.55 MB' },
  { id:102, url:'https://i.ibb.co/1twHT5qm/962869219757.jpg?auto=compress&cs=tinysrgb&w=600', title:'Anime Street', category:'anime', tags:['anime','street','city'], downloads:3720, likes:258, byMe:false, liked:false, resolution:'6000×3376', size:'2.23 MB' },
  { id:103, url:'https://i.ibb.co/ycmYYz5T/49660aa51ddf.jpg?auto=compress&cs=tinysrgb&w=600', title:'Dark Warrior', category:'dark', tags:['anime','dark','warrior'], downloads:3720, likes:258, byMe:false, liked:false, resolution:'3840×2073', size:'870 KB' },
  { id:104, url:'https://i.ibb.co/Wv1GWb7T/a9bda56015a0.jpg?auto=compress&cs=tinysrgb&w=600', title:'Japan Street', category:'city', tags:['japan','anime','street'], downloads:3720, likes:258, byMe:false, liked:false, resolution:'6000×4000', size:'3.12 MB' },
  { id:105, url:'https://i.ibb.co/CKgyG4Gb/9fe7bbb838a9.jpg?auto=compress&cs=tinysrgb&w=600', title:'Angel Alone', category:'dark', tags:['anime','dark','angel'], downloads:3720, likes:258, byMe:false, liked:false, resolution:'3840×2160', size:'1.38 MB' },

  { id:106, url:'https://i.ibb.co/p6QgqZBg/e5aeddd009d5.jpg?auto=compress&cs=tinysrgb&w=600', title:'Lastest Goal', category:'football', tags:['football','ball','goal'], downloads:3720, likes:258, byMe:false, liked:false, resolution:'4898×3265', size:'1.53 MB' },
  { id:107, url:'https://i.ibb.co/21mdcTrZ/29b69ea8e2e1.jpg?auto=compress&cs=tinysrgb&w=600', title:'Stadium', category:'football', tags:['football','stadium','sports'], downloads:3720, likes:258, byMe:false, liked:false, resolution:'4160×2340', size:'1.81 MB' },
  { id:108, url:'https://i.ibb.co/7x1Cn05q/530000abd464.jpg?auto=compress&cs=tinysrgb&w=600', title:'Ball', category:'football', tags:['football','ball','goal'], downloads:3720, likes:258, byMe:false, liked:false, resolution:'5114×3409', size:'4.80 MB ' },

];

let wallpapers = [...PLACEHOLDER_IMAGES];
let currentFilter = 'all';
let currentTab = 'all';
let currentSort = 'popular';
let searchQuery = '';

function updateStats() {
  document.getElementById('totalCountDisplay').textContent = `[${wallpapers.length}]`;
  document.getElementById('likedCount').textContent = wallpapers.filter(w=>w.liked).length;
  document.getElementById('uploadCount').textContent = wallpapers.filter(w=>w.byMe).length;
}

function getFiltered() {
  let list = [...wallpapers];
  if(currentTab==='trending') list = list.filter(w=>w.downloads>1000);
  if(currentTab==='liked') list = list.filter(w=>w.liked);
  if(currentTab==='mine') list = list.filter(w=>w.byMe);
  if(currentFilter!=='all') list = list.filter(w=>w.category===currentFilter);
  if(searchQuery) list = list.filter(w=>
    w.title.toLowerCase().includes(searchQuery) ||
    w.tags.some(t=>t.includes(searchQuery)) ||
    w.category.includes(searchQuery)
  );
  if(currentSort==='popular') list.sort((a,b)=>b.likes-a.likes);
  else list.sort((a,b)=>b.id-a.id);
  return list;
}

function renderGallery() {
  const list = getFiltered();
  const g = document.getElementById('gallery');
  const empty = document.getElementById('emptyState');
  
  if(list.length===0){ 
    g.innerHTML=''; 
    empty.classList.remove('hidden'); 
    return; 
  }
  
  empty.classList.add('hidden');
  g.innerHTML = list.map((w,i)=>`
    <div class="wall-card group" onclick="openWall(${w.id})">
      <div class="card-corner corner-tl"></div>
      <div class="card-corner corner-tr"></div>
      <div class="card-corner corner-bl"></div>
      <div class="card-corner corner-br"></div>
      
      <div class="absolute top-2 left-2 z-20">
        <span class="text-[9px] font-mono bg-background/80 px-1.5 py-0.5 text-secondary border border-secondary/20">DATA_${w.id.toString().padStart(4,'0')}</span>
      </div>

      <img src="${w.url}" alt="${w.title}" loading="lazy" class="w-full object-cover transition-transform duration-700 group-hover:scale-110">
      
      <div class="card-overlay absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5">
        <div class="text-sm font-heading font-bold mb-1">${w.title.toUpperCase()}</div>
        <div class="flex items-center gap-3 text-[10px] font-mono text-secondary-fixed-dim">
          <span><i class="bx bx-arrow-to-bottom" /></i> ${w.downloads.toLocaleString()}</span>
          <span><i class="ti ti-heart"></i> ${w.likes}</span>
        </div>
        <div class="mt-3 flex gap-1.5">
          <span class="text-[9px] font-mono bg-primary/20 text-primary-fixed-dim px-2 py-0.5 rounded-sm border border-primary/30 uppercase">${w.category}</span>
        </div>
      </div>

      <div class="absolute top-2 right-2 z-20 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0" onclick="event.stopPropagation()">
        <button class="w-8 h-8 rounded-full bg-background/90 flex items-center justify-center text-sm border border-outline-variant hover:border-error hover:text-error ${w.liked?'text-error border-error bg-error/10':''}" onclick="toggleLike(${w.id},this)">
          <i class="bxf bx-heart"></i>
        </button>
        <button class="w-8 h-8 rounded-full bg-background/90 flex items-center justify-center text-sm border border-outline-variant hover:border-secondary hover:text-secondary" onclick="downloadWall(${w.id})">
          <i class="bx bx-arrow-to-bottom"></i>
        </button>
      </div>
    </div>
  `).join('');
  updateStats();
}

function switchTab(el, tab) {
  document.querySelectorAll('.nav-tab').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
  currentTab = tab;
  renderGallery();
}

function setFilter(el, f) {
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
  el.classList.add('active');
  currentFilter = f;
  renderGallery();
}

function sortBy(s) {
  currentSort = s;
  renderGallery();
}

function filterGallery() {
  searchQuery = document.getElementById('searchInput').value.toLowerCase();
  renderGallery();
}

function toggleLike(id, el) {
  const w = wallpapers.find(x=>x.id===id);
  w.liked = !w.liked;
  w.likes += w.liked ? 1 : -1;
  renderGallery();
  showToast(w.liked ? 'NETWORK: ITEM_SAVED' : 'NETWORK: ITEM_REMOVED');
}

async function downloadWall(id) {
    const w = wallpapers.find(x => x.id === id);
    if (!w) return;
    w.downloads++;
    showToast('INITIALIZING: DOWNLINK_' + w.id);
    try {
        const response = await fetch(w.url);
        const blob = await response.blob();
        const blobUrl = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = blobUrl;
        a.download = 'wallcraft_' + w.title.replace(/\s+/g, '_').toLowerCase() + '.jpg';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(blobUrl);
        document.body.removeChild(a);
        renderGallery();
        showToast('STATUS: DOWNLOAD_COMPLETE');
    } catch (error) {
        showToast('ERROR: TRANSFER_FAILED');
    }
}

function openWall(id) {
  const w = wallpapers.find(x=>x.id===id);
  const modalHtml = `
    <div class="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-xl bg-black/60" id="wallModal" onclick="closeModal(event)">
      <div class="glass-border bg-surface-container-low max-w-4xl w-full rounded-xl overflow-hidden animate-in fade-in zoom-in duration-300" onclick="event.stopPropagation()">
        <div class="relative group">
          <img class="w-full h-[50vh] md:h-[60vh] object-cover" src="${w.url}" alt="${w.title}">
          <div class="absolute top-4 right-4 flex gap-2">
            <button class="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-error transition-colors" onclick="document.getElementById('wallModal').remove()">
              <i class="bx bx-x" ></i>
             
            </button>
          </div>
        </div>
        <div class="p-8">
          <div class="flex flex-col md:flex-row justify-between gap-6">
            <div class="flex-1">
              <div class="flex items-center gap-3 mb-2">
                <h3 class="font-heading text-2xl font-bold tracking-tight">${w.title}</h3>
                ${w.byMe ? '<span class="text-[10px] font-mono border border-secondary text-secondary px-2 py-0.5 rounded-sm">OWNER</span>' : ''}
              </div>
              <div class="flex flex-wrap gap-2 mb-6">
                ${w.tags.map(t=>`<span class="text-[10px] font-mono text-outline-variant bg-surface-container-high px-2 py-1 rounded">#${t.toUpperCase()}</span>`).join('')}
              </div>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-y border-outline-variant/10">
                <div><div class="text-[10px] font-mono text-outline uppercase mb-1">Res</div><div class="text-sm font-bold text-on-surface">${w.resolution}</div></div>
                <div><div class="text-[10px] font-mono text-outline uppercase mb-1">Size</div><div class="text-sm font-bold text-on-surface">${w.size}</div></div>
                <div><div class="text-[10px] font-mono text-outline uppercase mb-1">Downloads</div><div class="text-sm font-bold text-on-surface">${w.downloads}</div></div>
                <div><div class="text-[10px] font-mono text-outline uppercase mb-1">Likes</div><div class="text-sm font-bold text-on-surface">${w.likes}</div></div>
              </div>
            </div>
            <div class="flex flex-col gap-3 min-w-[200px]">
              <button class="btn-cyber w-full py-3 rounded text-sm font-bold tracking-wider flex items-center justify-center gap-2" onclick="downloadWall(${w.id})">
                <i class="ti ti-download"></i> DOWNLOAD
              </button>
              <button class="btn-outline-cyber w-full py-3 rounded text-sm font-bold tracking-wider flex items-center justify-center gap-2 ${w.liked?'bg-secondary/10 border-secondary':''}" onclick="toggleLike(${w.id},this)">
                <i class="bx bx-heart${w.liked?'-filled':''}"></i> ${w.liked?'SAVED':'SAVE TO CORE'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function closeModal(e) {
  if(e.target.id==='wallModal') document.getElementById('wallModal').remove();
}

function openUpload() {
  const uploadHtml = `
    <div class="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-xl bg-black/60" id="uploadModal" onclick="if(event.target.id==='uploadModal')this.remove()">
      <div class="glass-border bg-surface-container-low max-w-lg w-full p-8 rounded-xl animate-in slide-in-from-bottom-4 duration-300" onclick="event.stopPropagation()">
        <div class="flex justify-between items-center mb-8">
          <h3 class="font-heading text-xl font-bold tracking-tight">INITIALIZE_UPLOAD</h3>
          <button class="text-outline-variant hover:text-white" onclick="document.getElementById('uploadModal').remove()"><i class="bx bx-x text-2xl"></i></button>
        </div>
        
        <div class="mb-6">
          <div class="border-2 border-dashed border-outline-variant/30 rounded-xl p-10 text-center cursor-pointer hover:border-secondary transition-colors" id="dropZone" onclick="document.getElementById('fileInput').click()">
            <img id="previewImg" class="hidden w-full h-32 object-cover rounded mb-4" alt="Preview">
            <div id="uploadPlaceholder">
              <i class="ti ti-cloud-upload text-4xl text-secondary mb-3"></i>
              <div class="text-sm font-medium mb-1">Drop asset here</div>
              <div class="text-[10px] font-mono text-outline-variant">UP TO 20MB (JPG, PNG, WEBP)</div>
            </div>
          </div>
          <input type="file" id="fileInput" accept="image/*" class="hidden" onchange="previewFile(this)">
        </div>

        <div class="space-y-4 mb-8">
          <div>
            <label class="text-[10px] font-mono text-outline uppercase block mb-1">Asset Identity</label>
            <input id="upTitle" type="text" class="w-full px-4 py-2 text-sm rounded outline-none" placeholder="Enter Title...">
          </div>
          <div>
            <label class="text-[10px] font-mono text-outline uppercase block mb-1">Cluster Category</label>
            <select id="upCategory" class="w-full px-4 py-2 text-sm rounded outline-none">
              <option value="nature">Nature</option>
              <option value="abstract">Abstract</option>
              <option value="space">Space</option>
              <option value="city">City</option>
              <option value="minimal">Minimal</option>
            </select>
          </div>
        </div>

        <div class="flex gap-3">
          <button class="btn-cyber flex-1 py-3 text-sm font-bold tracking-widest" onclick="submitUpload()">PUBLISH</button>
          <button class="btn-outline-cyber px-6 py-3 text-sm font-bold" onclick="document.getElementById('uploadModal').remove()">ABORT</button>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', uploadHtml);
}

let uploadedDataUrl = null;
function previewFile(input) {
  const file = input.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    uploadedDataUrl = e.target.result;
    document.getElementById('previewImg').src = uploadedDataUrl;
    document.getElementById('previewImg').classList.remove('hidden');
    document.getElementById('uploadPlaceholder').classList.add('hidden');
    if(!document.getElementById('upTitle').value) {
      document.getElementById('upTitle').value = file.name.replace(/\.[^/.]+$/,'').replace(/[-_]/g,' ').toUpperCase();
    }
  };
  reader.readAsDataURL(file);
}

function submitUpload() {
  const title = document.getElementById('upTitle').value.trim();
  const category = document.getElementById('upCategory').value;
  if(!title || !uploadedDataUrl) { showToast('ERROR: INCOMPLETE_DATA'); return; }
  
  wallpapers.unshift({
    id: Date.now(), url: uploadedDataUrl, title, category, tags: [category],
    downloads: 0, likes: 0, byMe: true, liked: false,
    resolution: '1920×1080', size: '2.0 MB'
  });

  document.getElementById('uploadModal').remove();
  uploadedDataUrl = null;
  currentTab = 'mine';
  renderGallery();
  showToast('SUCCESS: DATA_SYNCED');
}

function showToast(msg) {
  const old = document.getElementById('toast');
  if(old) old.remove();
  const toast = `
    <div id="toast" class="fixed bottom-8 left-1/2 -translate-x-1/2 z-[200] toast px-6 py-3 rounded-full text-xs font-mono tracking-wider animate-in slide-in-from-bottom-4">
      <span class="text-secondary mr-2">>></span> ${msg}
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', toast);
  setTimeout(() => {
    const t = document.getElementById('toast');
    if(t) t.remove();
  }, 3000);
}

renderGallery();
