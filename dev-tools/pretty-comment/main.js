const CommentType = {
    HashtagBanner: {
        id: 0,
        char: '#',
        start: '#',
        end: "#"
    },
    SlashAsteriskSlashBanner: {
        id: 1,
        char: '*',
        start: '/*',
        end: "*/"
    },
    SlashHypenSlashBanner: {
        id: 2,
        char: '-',
        start: '/*',
        end: "*/"
    },
    StarBanner: {
        id: 3,
        char: '*',
        start: '*',
        end: "*"
    }
}

var commentType = CommentType.HashtagBanner.id;

const inputName = "inputComment";
const outputName = "outputComment";

function SetBannerBySelect(select){
    commentType = parseInt(select.value);
    UpdateComment(document.getElementById(inputName));
}

function SetOutput(text){
    console.log("Text: " + text);
    var output = document.getElementById(outputName);
    output.style.height = 'auto';
    output.style.height = (output.scrollHeight) + "px";
    output.value = text;
}

function GetBannerConfigByIndex(index){
    // console.log(index);
    switch(index){
        case 0:
            return CommentType.HashtagBanner;
        case 1:
            return CommentType.SlashAsteriskSlashBanner;
        case 2:
            return CommentType.SlashHypenSlashBanner;
        case 3:
            return CommentType.StarBanner;
    }
}

function CharToString(char, lenght){
    var string = "";
    for (var i = 0; i < lenght; i++){
        string += char;
    }
    return string;
}

function UpdateComment(input){

    input.style.height = 'auto';
    input.style.height = (input.scrollHeight) + "px";

    var lines = input.value.split('\n');

    if (lines.lenght === 0){
        SetOutput("");
        return;
    }

    console.log(lines);
    console.log(lines[0].length);
    var config = GetBannerConfigByIndex(commentType);

    var length = 0;

    lines.forEach(element => {
        if (element.length > length){
            length = element.length
        }
    });

    // console.log(config);
    var comment = "";

    comment += config.start + config.char;
    comment += CharToString(config.char, length);
    comment += config.char + config.end + "\n";

    lines.forEach(element => {
        comment += config.start + " ";
        comment += element;
        comment += CharToString(" ", length - element.length);
        comment += " " + config.end + "\n";
    });

    comment += config.start + config.char;
    comment += CharToString(config.char, length);
    comment += config.char + config.end;

    SetOutput(comment);
}

function Copy(){
    var copyText = document.getElementById(outputName);

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    // Alert the copied text
    // alert("Copied the text: " + copyText.value);
}