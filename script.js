const comments = [
  {
    author: "Паисий Хилендарски",
    quote: "„О, неразумни юроде! Поради что се срамиш да се наречеш българин?“",
    interpretation: "Днес това е призив да се гордеем с българската си идентичност.",
    image: "image/paisii.jpg"
  },
  {
    author: "Георги С. Раковски",
    quote: "„Нека всеки запише дълбоко в сърцето си: свобода или смърт!“",
    interpretation: "Цитатът изразява решимостта, че свободата е по-ценна от живота и си струва да се умре за нея. Свободата е най-важна. Без нея животът няма смисъл. По-добре смърт, отколкото робство.",
    image: "image/rakowski.jpg"
  },
  {
    author: "Любен Каравелов",
    quote: "„Обичам те, мое мило отечество!“",
    interpretation: "Това е израз на дълбока любов към родината.Каравелов се възхищава от красотата ѝ и страда заради съдбата ѝ. Любовта към отечеството е чиста, силна и непреходна.",
    image: "image/karawelow.jpg"
  },
  {
    author: "Христо Ботев",
    quote: "„Тоз, който падне в бой за свобода, той не умира.“",
    interpretation: "Делата на смелите надживяват телата им. Ботев ни учи, че каузите остават, когато са водени със сърце и истина. Всяка борба за справедливост ни прави по-близки до свободата.",
    image: "image/botev.jpg"
  },
  {
    author: "Васил Левски",
    quote: "„Ако спечеля, печеля за цял народ — ако загубя, губя само мене си.“",
    interpretation: "Борбата е за доброто на целия народ. Личната жертва е нищо пред общото благо. Истинският герой мисли за другите, не за себе си.",
    image: "image/lewski.jpg"
  },
  {
    author: "Добри Чинтулов",
    quote: "„Стани, стани, юнак балкански!“",
    interpretation: "Това е зов за пробуждане и действие. Днес означава да не сме пасивни пред неправдата и бездействието. Всеки от нас може да бъде „юнак“ – чрез знания, доблест и активна позиция.",
    image: "image/Chintilow.jpg"
  }
];

const gallery = document.getElementById("gallery");

comments.forEach(({ author, quote, interpretation, image }) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${image}" alt="${author}" class="portrait">
    <div class="quote">${quote}</div>
    <div class="interpretation">${interpretation}</div>
    <div class="author"><strong>${author}</strong></div>
  `;

  gallery.appendChild(card);
});
