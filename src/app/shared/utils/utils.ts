import { SwiperOptions } from 'swiper';
import { iconGroupList } from './options';
import { IconGroup, PaymentAccount } from './types';
import { accounts } from './mock-data';

/**
 * 
 * Se debe utilizar para componentes que tengan data-parent = true
 * @param target 
 */
export const isParent = (target: any): boolean => {
    if (!target.dataset) return false;
    return target.dataset.parent === 'true';
};

/**
 * currentOrParentContainDataValue
 * 
 * @param target 
 * @param data 
 * @param value 
 * @example currentOrParentContainDataValue(HTMLNode, 'type', 'card-account__context-menu');
 *          <div data-type="card-account__context-menu">
 */
export const currentOrParentContainDataValue = (target: HTMLElement, data: string, value: string): boolean => {
    const recursiveNavigate = (el: any): boolean => {
        if (el.dataset) {
            if (el.dataset[data]) {
                return el.dataset[data] === value;
            }
        }
        const parent = el.parentElement;
        if (parent) {
            return recursiveNavigate(parent);
        }
    };
    return recursiveNavigate(target);
};


export const getRandomElementFromArray = (array: Array<any>) : any => array[Math.floor(Math.random() * array.length)];


export const session = (() => {
    const SESSION_NAME = 'session';
    return {
        get: () => {
            const data = JSON.parse(localStorage.getItem(SESSION_NAME));
            return data ? data : null;
        },
        login: (username: string, password: string) => {
            const data = { username, password };
            localStorage.setItem(SESSION_NAME, JSON.stringify(data));
        },
        logout: () => {
            localStorage.removeItem(SESSION_NAME);
        },
        isLogin() {
            return !!localStorage.getItem(SESSION_NAME);
        },
        isLogout() {
            return !!!localStorage.getItem(SESSION_NAME);
        },
        firstTime(username: string) {
            localStorage.setItem('firstTime', JSON.stringify(username));
        },
        isFirstTime() {
            return !localStorage.getItem('firstTime');
        },
        showMessageEmailClient() {
            return !localStorage.getItem('showMessageEmailClient');
        },
        notShowMessageEmailClient() {
            localStorage.setItem('showMessageEmailClient', JSON.stringify('no'));
        }
    };
})();

export const formatNumber = (num: number | string): string => {
    return '$' + num.toString().replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
};

export const formatDate = (date: Date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1; //January is 0!
    const year = date.getFullYear();

    const dd = (day < 10) ? '0' + day : day;
    const mm = (month < 10) ? '0' + month : month;
    return dd + '/' + mm + '/' + year;
}

export const getIsNotNullDate = (obj : any, prop : string) => {
    try {
        return formatDate(obj[prop]);
    } catch (error) {
        return '';
    }
}

export const getIsNotNull = (obj : any, prop : string) => {
    try {
        return obj[prop];
    } catch (error) {
        return '';
    }
}

// List Icons
/**
 * 
 * @param favorite {boolean} - null: return all, true: only favorite, false: non favotire
 */
export const getIconsList = (favorite : boolean | null = null) : Array<IconGroup> => {
    const list : Array<IconGroup> = iconGroupList.filter((e : IconGroup) => {
        if (favorite === null) return true;
        if (!favorite) return !e.favorite;
        if (favorite) return e.favorite;
    });
    return list;
}

export const getIconByName = (name : string) : IconGroup => {
    const icon = getIconsList().find((icon : IconGroup) => icon.name === name);
    if (icon) return icon;
    return getIconsList().find((icon : IconGroup) => icon.name === 'default');
}

// List PaymentAccount
/**
 * 
 * @param favorite {boolean} - null: return all, true: only group, false: non group
 */
export const getPaymentAccountList = (group : boolean | null = null) : Array<PaymentAccount> => {
    const list : Array<PaymentAccount> = accounts.filter((e : PaymentAccount) => {
        if (group === null) return true;
        if (group) return e.group !== '';
        if (group === false) return e.group === '' || !e.group;
    });
    return list;
}

export const emailValidate = (mail : string): boolean => {
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail));
};

export const isSpecialCharacterEmail = (key: string): boolean => {
    return (/^[a-zA-Z0-9_@\\.\\-]+$/i).test(key);
};

export const isLetter = (str: string) => {
    return new RegExp(/^[a-zA-ZÀ-ÿ]+$/i).test(str);
};

export const isNumber = (event: KeyboardEvent): boolean => {
    if(event.charCode >= 48 && event.charCode <= 57){
        return true;
    }
    return false;
}

export const validatePassSE = (str: string) => {
    return new RegExp(/^[a-zA-Z0-9]+$/i).test(str);
}

export const validateNameRegSE = (str: string): boolean => {
    return (/^[a-zA-ZÀ-ÿ\s]+$/i).test(str);
}

export const introOptions = (title = '', subtitle = '', element = '#step1', buttonText = 'Entendido') => ({
    showBullets: false,
    showStepNumbers: false,
    doneLabel: buttonText,
    steps: [{
        element: element,
        intro: `<strong>${title}</strong>
            <p>${subtitle}</p>`,
        position: 'bottom',
        tooltipClass: 'tooltip-ui',
    }]
});

export const getSwiperOptions = () : SwiperOptions => {
    const options :  SwiperOptions ={
        slidesPerView: 'auto',
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        spaceBetween: 1,
    };
    return options;
};

export const containText = (value : any) => {
    return (typeof value === 'string' && value.length > 0);
}

export const getElementFromArray = (rubro: string) => {
    rubro = rubro.replace(/á/gi,"a")
            .replace(/é/gi,"e")
            .replace(/í/gi,"i")
            .replace(/ó/gi,"o")
            .replace(/ú/gi,"u");
    // rubro = rubro.replace(/ñ/gi,"n");
    console.log('Rubro:', rubro.toLocaleLowerCase());
    rubro = rubro.toLocaleLowerCase();
    if (rubro.includes('electricidad') || rubro.includes('electrica')) {return 'electrical'}
    else if (rubro.includes('agua')) {return 'water'}
    else if (rubro.includes('telefonia')) {return 'teleco'}
    else {return 'other'}
};