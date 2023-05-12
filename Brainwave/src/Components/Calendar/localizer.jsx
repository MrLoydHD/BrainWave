import { momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import 'moment/locale/pt';

moment.locale('pt');

const localidade = momentLocalizer(moment);

export default localidade;
