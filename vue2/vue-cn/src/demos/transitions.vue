<template>
	<div>
		<h1>单元素/组件的过渡</h1>
		<p>Vue 提供了 <strong>transition</strong> 的封装组件，在下列情形中，可以给任何元素和组件添加 entering/leaving 过渡</p>
		<ul>
			<li v-for="item in items">{{ item.transition }}</li>
		</ul>
		例子
		<div id="demo">
			<button v-on:click="show = !show">
                Toggle
            </button>
			<transition name="fade">
				<p v-if="show">hello</p>
			</transition>
			<p name="fade">
				<span v-if="show">hello</span>
			</p>
		</div>
		<h2>过渡的css类名</h2>
		<div v-for="state in states">
			{{ state.state }}
		</div>
		<h2>css过渡</h2>
		<div id="example-1">
			<button @click="slideShow = !slideShow">
                Toggle render
            </button>
			<transition name="slide-fade">
				<p v-if="slideShow">hello</p>
			</transition>
		</div>
        <h2>css动画</h2>
        <div id="example-2">
            <button @click="animationend = !animationend">Toggle show</button>
            <transition name="bounce">
                <p v-if="animationend">Look at me!</p>
            </transition>
        </div>
        <h2>自定义过渡类名</h2>
        我们可以通过以下特性来自定义过渡类名
        <div class="" v-for="customClass in customClasses">{{ customClass.customClass }}</div>
        <div id="example-3">
            <button @click="show = !show">
                Toggle render
            </button>
            <transition
                name="custom-classes-transition"
                enter-active-class="animated tada"
                leave-active-class="animated bounceOutRight"
            >
                <p v-if="show">hello</p>
            </transition>
        </div>
        <h2>同时使用-Transitions-和-Animations</h2>
        <h2>JavaScript-钩子</h2>
        <div id="example-4">
        <button @click="show = !show">
            Toggle
        </button>
        <transition
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
            v-on:leave="leave"
            v-bind:css="false"
        >
            <p v-if="show">
            Demo
            </p>
        </transition>
        </div>
	</div>
</template>

<script>
    import vue from 'Vue';


    export default({
        data() {
            return {

                items :[
                    { transition: "条件渲染 （使用 v-if）" },
                    { transition: "条件展示 （使用 v-show）" },
                    { transition: "动态组件" },
                    { transition: "组件根节点" }
                ],
                // 定义显示状态 
                show: true,
                states: [
                    { state: 'v-enter: 定义进入过渡的开始状态。在元素被插入时生效，在下一个帧移除。'},
                    { state: 'v-enter-active: 定义进入过渡的结束状态。在元素被插入时生效，在 transition/animation 完成之后移除。'},
                    { state: 'v-leave: 定义离开过渡的开始状态。在离开过渡被触发时生效，在下一个帧移除。'},
                    { state: 'v-leave-active: 定义离开过渡的结束状态。在离开过渡被触发时生效，在 transition/animation 完成之后移除。'}
                ],
                slideShow: true,
                animationend: true,
                // 自定义过渡类名
                customClasses: [
                    { customClass: 'enter-class' },
                    { customClass: 'enter-active-class' },
                    { customClass: 'leave-class' },
                    { customClass: 'leave-active-class' }
                ]
            }
        },
        methods: {
            // --------
            // 进入中
            // --------
            beforeEnter: function (el) {
                // ...
                console.log( "!!!!!!!!!!!!!!!!beforeEnter"  );
            },
            // 此回调函数是可选项的设置
            // 与 CSS 结合时使用
            enter: function (el, done) {
                // ...
                done()
            },
            afterEnter: function (el) {
                // ...
            },
            enterCancelled: function (el) {
                // ...
            },
            // --------
            // 离开时
            // --------
            beforeLeave: function (el) {
                // ...
            },
            // 此回调函数是可选项的设置
            // 与 CSS 结合时使用
            leave: function (el, done) {
                // ...
                done()
            },
            afterLeave: function (el) {
                // ...
            },
            // leaveCancelled 只用于 v-show 中
            leaveCancelled: function (el) {
                // ...
            }
        }
    })
</script>

<style scoped>
	strong {
		color: red;
		font-size: 16px;
	}
	
	li {
		display: list-item;
		list-style-type: disc;
	}
	
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity .5s
	}
	
	.fade-enter,
	.fade-leave-active {
		opacity: 0
	}


	/* 可以设置不同的进入和离开动画 */
	/* 设置持续时间和动画函数 */
	
	.slide-fade-enter-active {
		transition: all .3s ease;
	}
	
	.slide-fade-leave-active {
		transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	
	.slide-fade-enter,
	.slide-fade-leave-active {
		padding-left: 10px;
		opacity: 0;
	}

    /* css动画 */
    .bounce-enter-active {
        animation: bounce-in .5s;
    }
    .bounce-leave-active {
        animation: bounce-out .5s;
    }
    @keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.5);
    }
    100% {
        transform: scale(1);
    }
    }
    @keyframes bounce-out {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.5);
    }
    100% {
        transform: scale(0);
    }
    }
</style>