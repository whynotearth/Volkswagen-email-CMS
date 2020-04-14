import { JumpStartService } from '@whynotearth/meredith-axios';
// import { companySlug } from '@/constants/app';

export default {
  namespaced: true,
  state: {
    formData: {}
  },
  mutations: {
    update_to(state, payload) {
      state.formData.to = payload;
    },
    update_subject(state, payload) {
      state.formData.subject = payload;
    },
    update_description(state, payload) {
      state.formData.description = payload;
    },
    update_date(state, payload) {
      state.formData.date = payload;
    }
  },
  actions: {
    async test(context, payload) {
      try {
        await JumpStartService.test(payload.params);
      } catch (error) {
        throw new Error('Error in jumstart test');
      }
    }
  },
  getters: {
    get_to: state => state.formData.to,
    get_subject: state => state.formData.subject,
    get_description: state => state.formData.description,
    get_date: state => state.formData.date
  }
};
