import { titleize, underscore } from 'inflected';

export const humanizeName = name => titleize(underscore(name));
