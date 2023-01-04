// 创建一个新的 store 实例
const store = new Vuex.Store({
	state() {
		return {
			cars: [], // 订单数据,
			helpCars: [{
				id: 12345678910,
				name: '测试',
				pic: 'https://img-blog.csdnimg.cn/dc5faf7e7dda4eed9e0f573d1b490ba8.png',
				prize: 99,
				num: 9,
			}, {
				id: 12345678910,
				name: '富士instax立拍立得 一次成像相机 mini7c 水蓝色',
				pic: 'images/content_04.jpg',
				prize: 1260,
				num: 10,
			}]
		}
	},
	mutations: {
		/*  再买一个  */
		sBugAgain(state, id) {
			state.cars.forEach((item, index) => {
				if (item.id === id) item.num += 1
			})
			localStorage.setItem('resultCars', JSON.stringify(state.cars))
		},

		/*  删除当前商品  */
		sDelId(state, index) {
			state.cars.splice(index, 1);
			localStorage.setItem('resultCars', JSON.stringify(state.cars))
		},

		/*  实时更新购物车的数据  */
		sGetFormData(state, formData) {
			state.cars.push(formData);
		},

		/*  更新 cars 的数据  */
		sNewCars(state, resultCars) {
			state.cars = resultCars;
		}
	},
	actions: {
		/*  异步 实时更新购物车的数据  */
		sGetFormData(context, formData) {
			setTimeout(() => {
				context.commit('sGetFormData', formData)
			}, 100)
		},

	},
	getters: {}
})
