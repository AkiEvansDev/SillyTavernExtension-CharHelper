class Helper {
    static titleCase(str) {
        str = str.trim().replaceAll('-', ' ');
        return this.titleCaseWithChar(str, ' ');
    }

    static titleCaseWithChar(str, char) {
        let splitStr = str.split(char);

        for (let i = 0; i < splitStr.length; ++i) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }

        return splitStr.join(char);
    }

    static keyCase(str) {
        return str.trim().toLowerCase().replaceAll(' ', '-');
    }

    static smartSplit(str, char) {
        return str.split(char).map(x => x.trim());
    }

    static buildResult(template, steps) {
        template = this.hideDoubleCurlyBrace(template);

        steps.forEach((stepData) => {
            template = template.replace(stepData.step['template'], stepData.getResult());
        });

        return this.restoreDoubleCurlyBrace(this.clearResult(template));
    }

    static hideDoubleCurlyBrace(str) {
        str = str.replaceAll('{{;', '&[[');
        str = str.replaceAll('}}', '&]];');

        return str;
    }

    static restoreDoubleCurlyBrace(str) {
        str = str.replaceAll('&[[;', '{{');
        str = str.replaceAll('&]];', '}}');

        return str;
    }

    static clearResult(str) {
        while (str.includes('  ')) {
            str = str.replaceAll('  ', ' ');
        }
        
        str = str.replaceAll('{', '');
        str = str.replaceAll('}', '');
        str = str.replaceAll('?', '');
        str = str.replaceAll(' , ', ', ');
        str = str.replaceAll(', ,', ',');
        str = str.replaceAll('+ +', '+');
        str = str.replaceAll(', ;', ';');
        str = str.replaceAll(',;', ';');
        str = str.replaceAll('+ ;', ';');
        str = str.replaceAll('+;', ';');
        str = str.replaceAll('; ;', ';');
        str = str.replaceAll(' ;', ';');
        str = str.replaceAll(';;', ';');

        return str;
    }
}

export default Helper;
