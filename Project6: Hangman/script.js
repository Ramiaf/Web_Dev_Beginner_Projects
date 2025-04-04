var wordList = ["abandon","ability","able","about","above","absent","absorb","abstract","absurd","abuse","access","accident","account","accuse","achieve","acid","acoustic",
    "acquire","across","act","action","actor","actress","actual","adapt","add","addict","address","adjust","admit","adult","advance","advice","aerobic","affair","afford",
    "already","also","alter","always","amateur","amazing","among","amount","amused","analyst","anchor","ancient","anger","angle","angry","animal","ankle","announce","annual",
    "another","answer","antenna","antique","anxiety","any","apart","apology","appear","apple","approve","april","arch","arctic","area","arena","argue","arm","armed","armor","army",
    "because","become","beef","before","begin","behave","behind","believe","below","belt","bench","benefit","best","betray","better","between","beyond","bicycle","bid","bike","bind",
    "biology","bird","birth","bitter","black","blade","blame","blanket","blast","bleak","bless","blind","blood","blossom","blouse","blue","blur","blush","board","boat","body","boil",
    "bridge","brief","bright","bring","brisk","broccoli","broken","bronze","broom","brother","brown","brush","bubble","buddy","budget","buffalo","build","bulb","bulk",
    "case","cash","casino","castle","casual","cat","catalog","catch","category","cattle","caught","cause","caution","cave","ceiling","celery","cement","census","century",
    "cereal","certain","chair","chalk","champion","change","chaos","chapter","charge","chase","chat","cheap","check","cheese","chef","cherry","chest","chicken","chief","child",
    "chimney","choice","choose","chronic","chuckle","chunk","churn","cigar","cinnamon","circle","citizen","city","civil","claim","clap","clarify","claw","clay","clean","clerk",
    "coffee","coil","coin","collect","color","column","combine","come","comfort","comic","common","company","concert","conduct","confirm","congress","connect","consider","control",
    "cram","crane","crash","crater","crawl","crazy","cream","credit","creek","crew","cricket","crime","crisp","critic","crop","cross","crouch","crowd","crucial","cruel","cruise","crumble",
    "dash","daughter","dawn","day","deal","debate","debris","decade","december","decide","decline","decorate","decrease","deer","defense","define","defy","degree","delay","deliver","demand",
    "demise","denial","dentist","deny","depart","depend","deposit","depth","deputy","derive","describe","desert","design","desk","despair","destroy","detail","detect","develop","device","devote",
    "embrace","emerge","emotion","employ","empower","empty","enable","enact","end","endless","endorse","enemy","energy","enforce","engage","engine","enhance","enjoy","enlist","enough","enrich","enroll","ensure","enter",
    "entire","entry","envelope","episode","equal","equip","era","erase","erode","erosion","error","erupt","escape","essay","essence","estate","eternal","ethics","evidence","evil","evoke","evolve","exact","example","excess",
    "exchange","excite","exclude","excuse","execute","exercise","exhaust","exhibit","exile","exist","exit","exotic","expand","expect","expire","explain","expose","express","extend","extra","eye","eyebrow","fabric","face",
    "female","fence","festival","fetch","fever","few","fiber","fiction","field","figure","file","film","filter","final","find","fine","finger","finish","fire","firm","first","fiscal","fish","fit","fitness","fix","flag",
    "gain","galaxy","gallery","game","gap","garage","garbage","garden","garlic","garment","gas","gasp","gate","gather","gauge","gaze","general","genius","genre","gentle","genuine","gesture","ghost","giant","gift",
    "hair","half","hammer","hamster","hand","happy","harbor","hard","harsh","harvest","hat","have","hawk","hazard","head","health","heart","heavy","hedgehog","height","hello","helmet","help","hen","hero","hidden",
    "improve","impulse","inch","include","income","increase","index","indicate","indoor","industry","infant","inflict","inform","inhale","inherit","initial","inject","injury","inmate","inner","innocent","input","inquiry",
    "mail","main","major","make","mammal","man","manage","mandate","mango","mansion","manual","maple","marble","march","margin","marine","market","marriage","mask","mass","master","match","material","math","matrix","matter","maximum","maze",
    "meadow","mean","measure","meat","mechanic","medal","media","melody","melt","member","memory","mention","menu","mercy","merge","merit","merry","mesh","message","metal","method","middle","midnight","milk","million","mimic","mind","minimum",
    "minor","minute","miracle","mirror","misery","miss","mistake","mix","mixed","mixture","mobile","model","modify","mom","moment","monitor","monkey","monster","month","moon","moral","more","morning","mosquito","mother","motion","motor","mountain",
    "oblige","obscure","observe","obtain","obvious","occur","ocean","october","odor","off","offer","office","often","oil","okay","old","olive","olympic","omit","once","one","onion","online","only","open","opera","opinion","oppose","option","orange",
    "panel","panic","panther","paper","parade","parent","park","parrot","party","pass","patch","path","patient","patrol","pattern","pause","pave","payment","peace","peanut","pear","peasant","pelican","pen","penalty","pencil","people","pepper",
    "pluck","plug","plunge","poem","poet","point","polar","pole","police","pond","pony","pool","popular","portion","position","possible","post","potato","pottery","poverty","powder","power","practice","praise","predict","prefer","prepare","present",
    "pretty","prevent","price","pride","primary","print","priority","prison","private","prize","problem","process","produce","profit","program","project","promote","proof","property","prosper","protect","proud","provide","public","pudding","pull",
    "pulp","pulse","pumpkin","punch","pupil","puppy","purchase","purity","purpose","purse","push","put","puzzle","pyramid","quality","quantum","quarter","question","quick","quit","quiz","quote","rabbit","raccoon","race","rack","radar","radio","rail",
    "rain","raise","rally","ramp","ranch","random","range","rapid","rare","rate","rather","raven","raw","razor","ready","real","reason","rebel","rebuild","recall","receive","recipe","record","recycle","reduce","reflect","reform","refuse","region","regret",
    "return","reunion","reveal","review","reward","rhythm","rib","ribbon","rice","rich","ride","ridge","rifle","right","rigid","ring","riot","ripple","risk","ritual","rival","river","road","roast","robot","robust","rocket","romance","roof","rookie","room",
    "scale","scan","scare","scatter","scene","scheme","school","science","scissors","scorpion","scout","scrap","screen","script","scrub","sea","search","season","seat","second","secret","section","security","seed","seek","segment","select","sell","seminar",
    "senior","sense","sentence","series","service","session","settle","setup","seven","shadow","shaft","shallow","share","shed","shell","sheriff","shield","shift","shine","ship","shiver","shock","shoe","shoot","shop","short","shoulder","shove","shrimp","shrug",
    "shuffle","shy","sibling","sick","side","siege","sight","sign","silent","silk","silly","silver","similar","simple","since","sing","siren","sister","situate","six","size","skate","sketch","ski","skill","skin","skirt","skull","slab","slam","sleep","slender",
    "slice","slide","slight","slim","slogan","slot","slow","slush","small","smart","smile","smoke","smooth","snack","snake","snap","sniff","snow","soap","soccer","social","sock","soda","soft","solar","soldier","solid","solution","solve","someone","song","soon",
    "sorry","sort","soul","sound","soup","source","south","space","spare","spatial","spawn","speak","special","speed","spell","spend","sphere","spice","spider","spike","spin","spirit","split","spoil","sponsor","spoon","sport","spot","spray","spread","spring",
    "this","thought","three","thrive","throw","thumb","thunder","ticket","tide","tiger","tilt","timber","time","tiny","tip","tired","tissue","title","toast","tobacco","today","toddler","toe","together","toilet","token","tomato","tomorrow","tone","tongue","tonight","tool","tooth",
    "ugly","umbrella","unable","unaware","uncle","uncover","under","undo","unfair","unfold","unhappy","uniform","unique","unit","universe","unknown","unlock","until","unusual","unveil","update","upgrade","uphold","upon","upper","upset","urban","urge","usage","use","used","useful","useless",
    "vacant","vacuum","vague","valid","valley","valve","van","vanish","vapor","various","vast","vault","vehicle","velvet","vendor","venture","venue","verb","verify","version","visit","visual","vital","vivid","vocal","voice","void",
    "wasp","waste","water","wave","way","wealth","weapon","wear","weasel","weather","web","wedding","weekend","weird","welcome","west","wet","whale","what","wheat","wheel","when","where","whip","whisper","wide","width","wife","wild","will","win",
    "yard","year","yellow","you","young","youth","zebra","zero","zone","zoo"
]
const row1 = document.getElementById("row1-letters");
row1.style.display="flex";
row1.style.gap = "15px";
row1.style.justifyContent = "center";

const row2 = document.getElementById("row2-letters");
row2.style.display = "flex";
row2.style.gap = "15px";
row2.style.justifyContent = "center";
row2.style.position = "relative";
row2.style.top = "15px";

const row3 = document.getElementById("row3-letters");
row3.style.display = "flex";
row3.style.gap = "15px";
row3.style.justifyContent = "center";
row3.style.position = "relative";
row3.style.top = "30px";

const all_letters = "abcdefghijklmnopqrstuvwxyz".split("");

const row1_letters = "abcdefghi".split("");
const row2_letters = "jklmnopqr".split("");
const row3_letters = "stuvwxyz".split("");

var key;
var number_of_mistakes = document.getElementById("mistakes");
var mistakes_score = parseInt(number_of_mistakes.innerText);

hangman = document.querySelector("img");

chosen_word = wordList[Math.floor(Math.random() * wordList.length)];

hidden_word = new Array(chosen_word.length).fill("-");
word = document.getElementById("hidden_word");
word.innerText = hidden_word.join(" ");

row1_letters.forEach(letter => {
    key = document.createElement("button");
    displayLetters(row1, key, letter);
    add_button_function(key);
});

row2_letters.forEach(letter => {
    key = document.createElement("button");
    displayLetters(row2, key, letter);
    add_button_function(key);
});

row3_letters.forEach(letter => {
    key = document.createElement("button");
    displayLetters(row3, key, letter);
    add_button_function(key);
});

function add_button_function(key) {
    key.addEventListener("click", () => {
        if (key.style.backgroundColor === "blue") {
            stat = check_if_letter_in_word(key.innerText, chosen_word, hidden_word);
            if (stat === true) {
                key.style.backgroundColor = "green";
            }
            else {
                key.style.backgroundColor = "red";
            }
        }
    });
}

function displayLetters(row, key, letter) {
    key.innerText = letter;
    key.style.fontSize = "20px";
    key.style.color = "white";
    key.style.cursor = "pointer";
    key.style.width = "50px";
    key.style.height = "50px";
    key.style.backgroundColor = "blue";
    key.style.border = "1px solid black";
    key.style.borderRadius = "15px";
    key.addEventListener("mouseover", () => {
        key.style.opacity = "0.9";
    })
    key.addEventListener("mouseout", () => {
        key.style.opacity = "1";
    })
    row.appendChild(key);
}

function check_if_letter_in_word(letter, chosen_word, hidden_word) {
    let flag = false;
    let stat = false;
    for(let i=0; i<chosen_word.length; i+=1) {
        if (chosen_word[i] === letter) {
            flag = true;
            hidden_word[i] = letter;
        }
    }
    if (flag === true) {
        word.innerText = hidden_word.join(" ");
        stat = true;
        if (word.innerText.split(" ").join("") === chosen_word) {
            setTimeout(() => {
                alert("You guessed it! Play again?");
                location.reload();
            }, 20);
        }
        
    }
    else {
        mistakes_score+=1;
        number_of_mistakes.innerText = mistakes_score;
        stat = false;
        if (mistakes_score === 6){
            update_hangman(hangman, mistakes_score);
            setTimeout(() => {
                alert(`You lose :(\nThe word was \"${chosen_word}\"! Try again?`);
                location.reload();
            }, 20);
            
        }
        else {
            update_hangman(hangman, mistakes_score);
        }
    }
    return stat
}

function update_hangman(hangman, mistakes_score) {
    hangman.src = `images/${mistakes_score}.jpg`;
}