import '/scss/blog.scss';

import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useBlogSliders } from './components/blog/slider.js';
import { useCategoryFilter } from './components/blog/filter.js';

useTheme();
useBurger();
useBlogSliders();
useCategoryFilter();
