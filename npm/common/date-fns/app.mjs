/**********************************************************************************************
 * https://github.com/date-fns/date-fns#readme
 **********************************************************************************************/

import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import { es, it } from 'date-fns/locale'

const log = console.log;

log( format(new Date(), "'Today is a' eeee") );
log( formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true }) );
log( formatRelative(subDays(new Date(), 3), new Date()) );
log( formatRelative(subDays(new Date(), 3), new Date()) );
log( formatRelative(subDays(new Date(), 3), new Date(), { locale: es }) );
log( formatRelative(subDays(new Date(), 3), new Date(), { locale: it }) );

