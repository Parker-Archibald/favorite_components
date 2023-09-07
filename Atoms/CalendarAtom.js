import {atom} from 'recoil';

export const calendarState = atom({
    key: 'calendarState',
    default: false
});

export const addScheduleState = atom({
    key: 'addScheduleState',
    default: false
})