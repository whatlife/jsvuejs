<template>
    <div id="FormInputBindings">
            <h1>表单控制绑定</h1>
            <h2>基础用法</h2>
            <div>
                文本
                <input v-model="message" placeholder="edit me">
                <p>Message is: {{ message }}</p>
            </div>
            <div>
                多行文本
                <span>Multiline message is:</span>
                <p style="white-space: pre">{{ message }}</p>
                <br>
                <textarea v-model="message" placeholder="add multiple lines"></textarea>
            </div>
            <div>
                复选框
                单个
                <input type="checkbox" id="checkbox" v-model="checked">
                <label for="checkbox">{{ checked }}</label>
                <br>
                复选框
                多个
                <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
                <label for="jack">Jack</label>
                <input type="checkbox" id="john" value="John" v-model="checkedNames">
                <label for="john">John</label>
                <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
                <label for="mike">Mike</label>
                
                <span>Checked names: {{ checkedNames }}</span>
            </div>
            <div>
                单选按钮
                <input type="radio" id="one" value="one" v-model="picked">
                <label for="one">one</label>
                <input type="radio" id="two" value="two" v-model="picked">
                <label for="two">two</label>
                <span>picked: {{ picked }}</span>
            </div>
            <div>
                选择列表 单选列表
                <select v-model="selected">
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                </select>
                <span>selected: {{ selected }} </span>
                <br>
                选择列表 多选列表
                <select v-model="selected" multiple>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                </select>
                <span>selected: {{ selected }} </span>
                <br>
                动态选项用 v-for 渲染
                <select v-model="selected">
                    <option v-for="option in options" v-bind:value="option.value">
                        {{ option.text }}
                    </option>
                </select>
                <span>Selected: {{ selected }}</span>

            </div>
    </div>
</template>

<script>
    export default({
        data() {
            return {
                message: '',
                checked: false,
                checkedNames: [],
                picked: '',
                selected: [],
                selected: 'A',
                options: [
                    { text: 'One', value: 'A' },
                    { text: 'Two', value: 'B' },
                    { text: 'Three', value: 'C' }
                ]

            }
        }
    });
</script>