import Ember from 'ember';
import { EKMixin, keyUp, keyDown } from 'ember-keyboard';
const { getOwner } = Ember;

export default Ember.Component.extend(EKMixin, {

  classNames: ['full-page'],

  init() {
    this._super(...arguments);

    this.set('keyboardActivated', true);
  },

  changeSlideNext: Ember.on(keyDown('ArrowRight'), function() {
    this.nextSlide(1);
  }),

  changeSlideLast: Ember.on(keyDown('ArrowLeft'), function() {
    this.nextSlide(-1);
  }),

  changeGroupNext: Ember.on(keyDown('ArrowDown'), function() {
    this.nextGroup(1);
  }),

  changeGroupLast: Ember.on(keyDown('ArrowUp'), function() {
    this.nextGroup(-1);
  }),

  nextSlide(amount = 1) {
    const router = getOwner(this).lookup('router:main');
    const routeName = router.currentRouteName;
    const route = getOwner(this).lookup(`route:${routeName}`);
    const slides = route.modelFor('slide-mode.slide').get('slides');

    if (routeName === 'slide-mode.slide.view') {
      const currentSlide = route.modelFor('slide-mode.slide.view');
      const nextSlideOrder = currentSlide.get('order') + amount;
      const nextSlide = slides.findBy('order', nextSlideOrder);

      if (nextSlide) {
        router.transitionTo('slide-mode.slide.view', nextSlide);
      }
    } else if (routeName === 'slide-mode.slide.index') {
      const nextSlideOrder = 0;

      const nextSlide = slides.findBy('order', nextSlideOrder);
      if (nextSlide) {
        router.transitionTo('slide-mode.slide.view', nextSlide);
      }
    }
  },

  nextGroup(amount = 1) {
    const router = getOwner(this).lookup('router:main');
    const routeName = router.currentRouteName;
    const route = getOwner(this).lookup(`route:${routeName}`);

    const currentGroup = route.modelFor('slide-mode.slide');
    const nextGroupOrder = currentGroup.get('number') + amount;
    console.log(currentGroup.get('number'), amount);
    const nextGroup = this.groups.findBy('number', nextGroupOrder);

    if (nextGroup) {
      router.transitionTo('slide-mode.slide', nextGroup);
    }
  }
});
