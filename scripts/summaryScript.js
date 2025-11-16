let totalCorrect = localStorage.getItem("score");
let unattempted = localStorage.getItem("unanswered");
let points = 1;

document.getElementById("attempted").innerHTML = 10 - unattempted;
document.getElementById("unanswered").innerHTML = unattempted;
document.getElementById("correct").innerHTML = totalCorrect;
document.getElementById("wrong").innerHTML = 10 - unattempted - totalCorrect;
document.getElementById("points").innerHTML = points;
document.getElementById("total").innerHTML = points * totalCorrect;

let correctAnswers;
let questions;

if ( localStorage.subjects == "English")
{
    document.getElementById("subject").innerHTML = "English Studies";
    questions = [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quisquam officia iste vel, nemo recusandae ab quia quisconsequuntur animi corrupti exercitationem quod veniam inlaboriosam sunt praesentium at molestiae mollitia vero ipsa? Vel soluta aspernatur repellendus saepe officia libero. Natu eaque dicta deserunt aperiam molestiae adipisci consecteturipsum. Illum ducimus ipsa officia accusantium! Vitae, cumquecorporis. At enim consequatur odit.",
        "ft ydydyt dytdzuf ukuyg ug8yufudyt  yigigiyf ugiugi gigyt giukiug78tgiyjgfuy  uygugugu  uygugugiugig yguigiu ugu",
        "okpomi  ggyufu  fytyftyf7y ytf7iyfiufy i uyfuyf7 yuf uyguyuguhg ufuyf uy y uyguygugug uguy uygu ugu guygug uguyh",
        "Jhg uytvyc gf gftgcytchc  utfufyuguuiyg yfuyfuyf uyfug uff uyfiuyguguygyuu uguygyugyuggyugyg uy yu gygyugyuuy g ",
        "jhjhvvg vuuttuvu uvyuuggvu yuyuuuyv f yffytfyt ytfyf ytfytfyfyy fytdesdrtdd dtrdudyudytd rts  dyrtd uydtrtdytdyt",
        "ft ydydyt dytdzuf ukuyg ug8yufudyt  yigigiyf ugiugi gigyt giukiug78tgiyjgfuy  uygugugu  uygugugiugig yguigiu ugu",
        "okpomi  ggyufu  fytyftyf7y ytf7iyfiufy i uyfuyf7 yuf uyguyuguhg ufuyf uy y uyguygugug uguy uygu ugu guygug uguyh",
        "Jhg uytvyc gf gftgcytchc  utfufyuguuiyg yfuyfuyf uyfug uff uyfiuyguguygyuu uguygyugyuggyugyg uy yu gygyugyuuy g ",
        "jhjhvvg vuuttuvu uvyuuggvu yuyuuuyv f yffytfyt ytfyf ytfytfyfyy fytdesdrtdd dtrdudyudytd rts  dyrtd uydtrtdytdyt",
        "ft ydydyt dytdzuf ukuyg ug8yufudyt  yigigiyf ugiugi gigyt giukiug78tgiyjgfuy  uygugugu  uygugugiugig yguigiu ugu"
    ]

    correctAnswers = [
        "A",
        "B",
        "C",
        "D",
        "A",
        "B",
        "C",
        "D",
        "A",
        "B"
    ]
}   
else if ( localStorage.subjects == "Basic Science")
{
    document.getElementById("subject").innerHTML = "Basic Science";
    questions = [
    "Lorem scientist scienscular or sit amet consectetur adipisicing elit.Quisquam officia iste vel, nemo recusandae ab quia quisconsequuntur animi corrupti exercitationem quod veniam inlaboriosam sunt praesentium at molestiae mollitia vero ipsa? Vel soluta aspernatur repellendus saepe officia libero. Natu eaque dicta deserunt aperiam molestiae adipisci consecteturipsum. Illum ducimus ipsa officia accusantium! Vitae, cumquecorporis. At enim consequatur odit.",
    "ft ydydyt dytdzuf ukuyg ug8yufudyt  yigigiyf ugiugi gigyt giukiug78tgiyjgfuy  uygugugu  uygugugiugig yguigiu ugu",
    "okpomi  ggyufu  fytyftyf7y ytf7iyfiufy i uyfuyf7 yuf uyguyuguhg ufuyf uy y uyguygugug uguy uygu ugu guygug uguyh",
    "Jhg uytvyc gf gftgcytchc  utfufyuguuiyg yfuyfuyf uyfug uff uyfiuyguguygyuu uguygyugyuggyugyg uy yu gygyugyuuy g ",
    "jhjhvvg vuuttuvu uvyuuggvu yuyuuuyv f yffytfyt ytfyf ytfytfyfyy fytdesdrtdd dtrdudyudytd rts  dyrtd uydtrtdytdyt",
    "ft ydydyt dytdzuf ukuyg ug8yufudyt  yigigiyf ugiugi gigyt giukiug78tgiyjgfuy  uygugugu  uygugugiugig yguigiu ugu",
    "okpomi  ggyufu  fytyftyf7y ytf7iyfiufy i uyfuyf7 yuf uyguyuguhg ufuyf uy y uyguygugug uguy uygu ugu guygug uguyh",
    "Jhg uytvyc gf gftgcytchc  utfufyuguuiyg yfuyfuyf uyfug uff uyfiuyguguygyuu uguygyugyuggyugyg uy yu gygyugyuuy g ",
    "jhjhvvg vuuttuvu uvyuuggvu yuyuuuyv f yffytfyt ytfyf ytfytfyfyy fytdesdrtdd dtrdudyudytd rts  dyrtd uydtrtdytdyt",
    "ft ydydyt einstein issac zuf ukuyg ug8yufudyt  yigigiyf ugiugi gigyt giukiug78tgiyjgfuy  uygugugu  uygugugiugig yguigiu ugu"
    ]

    correctAnswers = [
        "A",
        "B",
        "C",
        "D",
        "A",
        "B",
        "C",
        "D",
        "A",
        "B"
    ]
}
else 
{
    questions = [
    "Lorem ipsum dolor sit mathematics mathsis adipisicing elit.Quisquam officia iste vel, nemo recusandae ab quia quisconsequuntur animi corrupti exercitationem quod veniam inlaboriosam sunt praesentium at molestiae mollitia vero ipsa? Vel soluta aspernatur repellendus saepe officia libero. Natu eaque dicta deserunt aperiam molestiae adipisci consecteturipsum. Illum ducimus ipsa officia accusantium! Vitae, cumquecorporis. At enim consequatur odit.",
    "ft ydydyt dytdzuf ukuyg ug8yufudyt  yigigiyf ugiugi gigyt giukiug78tgiyjgfuy  uygugugu  uygugugiugig yguigiu ugu",
    "okpomi  ggyufu  fytyftyf7y ytf7iyfiufy i uyfuyf7 yuf uyguyuguhg ufuyf uy y uyguygugug uguy uygu ugu guygug uguyh",
    "Jhg uytvyc gf gftgcytchc  utfufyuguuiyg yfuyfuyf uyfug uff uyfiuyguguygyuu uguygyugyuggyugyg uy yu gygyugyuuy g ",
    "jhjhvvg vuuttuvu uvyuuggvu yuyuuuyv f yffytfyt ytfyf ytfytfyfyy fytdesdrtdd dtrdudyudytd rts  dyrtd uydtrtdytdyt",
    "ft ydydyt dytdzuf ukuyg ug8yufudyt  yigigiyf ugiugi gigyt giukiug78tgiyjgfuy  uygugugu  uygugugiugig yguigiu ugu",
    "okpomi  ggyufu  fytyftyf7y ytf7iyfiufy i uyfuyf7 yuf uyguyuguhg ufuyf uy y uyguygugug uguy uygu ugu guygug uguyh",
    "Jhg uytvyc gf gftgcytchc  utfufyuguuiyg yfuyfuyf uyfug uff uyfiuyguguygyuu uguygyugyuggyugyg uy yu gygyugyuuy g ",
    "jhjhvvg vuuttuvu uvyuuggvu yuyuuuyv f yffytfyt ytfyf ytfytfyfyy fytdesdrtdd dtrdudyudytd rts  dyrtd uydtrtdytdyt",
    "ft ydydyt dytdzuf ugraphical  functional yufudyt  yigigiyf ugiugi gigyt giukiug78tgiyjgfuy  uygugugu  uygugugiugig yguigiu ugu"
    ]


    correctAnswers = [
        "A",
        "B",
        "C",
        "D",
        "A",
        "B",
        "C",
        "D",
        "A",
        "B"
    ]
}

function corrections (questionNumber)
{
    let index = questionNumber-1;
    document.getElementsByClassName("question")[index].innerHTML = questions[index];
    document.getElementsByClassName("answer")[index].innerHTML = correctAnswers[index];
    document.getElementsByClassName("mark")[index].innerHTML = points;
}

for (let i = 1; i <= 10; i++)
{
    corrections(i);
}

localStorage.clear;
