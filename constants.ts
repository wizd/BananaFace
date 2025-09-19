import type { ControlGroup } from './types';

const defaultOption = { label: { en: 'Default', zh: '默认' }, value: '' };

export const CONTROL_GROUPS: ControlGroup[] = [
  {
    name: { en: 'Character', zh: '角色' },
    controls: [
      {
        id: 'gender',
        name: { en: 'Gender', zh: '🚻 性别' },
        options: [
          defaultOption,
          { label: { en: 'Man', zh: '男性' }, value: 'Man' },
          { label: { en: 'Woman', zh: '女性' }, value: 'Woman' },
        ],
      },
      {
        id: 'age',
        name: { en: 'Age', zh: '🧑 年龄' },
        options: [
          defaultOption,
          { label: { en: 'Baby (0-2)', zh: '婴儿 (0-2)' }, value: 'Baby' },
          { label: { en: 'Child (3-12)', zh: '儿童 (3-12)' }, value: 'Child' },
          { label: { en: 'Teenager (13-19)', zh: '青少年 (13-19)' }, value: 'Teenager' },
          { label: { en: 'Young Adult (20-39)', zh: '青年 (20-39)' }, value: 'Young Adult' },
          { label: { en: 'Middle-aged Adult (40-59)', zh: '中年 (40-59)' }, value: 'Middle-aged Adult' },
          { label: { en: 'Senior (60+)', zh: '老年 (60+)' }, value: 'Senior' },
        ],
      },
      {
        id: 'nationality',
        name: { en: 'Nationality', zh: '🌍 种族' },
        options: [
            defaultOption,
            { label: { en: "Afghan", zh: "阿富汗人" }, value: "Afghan" }, { label: { en: "Albanian", zh: "阿尔巴尼亚人" }, value: "Albanian" },
            { label: { en: "Algerian", zh: "阿尔及利亚人" }, value: "Algerian" }, { label: { en: "Andorran", zh: "安道尔人" }, value: "Andorran" },
            { label: { en: "Angolan", zh: "安哥拉人" }, value: "Angolan" }, { label: { en: "Argentine", zh: "阿根廷人" }, value: "Argentine" },
            { label: { en: "Armenian", zh: "亚美尼亚人" }, value: "Armenian" }, { label: { en: "Australian", zh: "澳大利亚人" }, value: "Australian" },
            { label: { en: "Austrian", zh: "奥地利人" }, value: "Austrian" }, { label: { en: "Azerbaijani", zh: "阿塞拜疆人" }, value: "Azerbaijani" },
            { label: { en: "Bahamian", zh: "巴哈马人" }, value: "Bahamian" }, { label: { en: "Bahraini", zh: "巴林人" }, value: "Bahraini" },
            { label: { en: "Bangladeshi", zh: "孟加拉国人" }, value: "Bangladeshi" }, { label: { en: "Barbadian", zh: "巴巴多斯人" }, value: "Barbadian" },
            { label: { en: "Belarusian", zh: "白俄罗斯人" }, value: "Belarusian" }, { label: { en: "Belgian", zh: "比利时人" }, value: "Belgian" },
            { label: { en: "Belizean", zh: "伯利兹人" }, value: "Belizean" }, { label: { en: "Beninese", zh: "贝宁人" }, value: "Beninese" },
            { label: { en: "Bhutanese", zh: "不丹人" }, value: "Bhutanese" }, { label: { en: "Bolivian", zh: "玻利维亚人" }, value: "Bolivian" },
            { label: { en: "Brazilian", zh: "巴西人" }, value: "Brazilian" }, { label: { en: "British", zh: "英国人" }, value: "British" },
            { label: { en: "Bruneian", zh: "文莱人" }, value: "Bruneian" }, { label: { en: "Bulgarian", zh: "保加利亚人" }, value: "Bulgarian" },
            { label: { en: "Burkinabe", zh: "布基纳法索人" }, value: "Burkinabe" }, { label: { en: "Burundian", zh: "布隆迪人" }, value: "Burundian" },
            { label: { en: "Cambodian", zh: "柬埔寨人" }, value: "Cambodian" }, { label: { en: "Cameroonian", zh: "喀麦隆人" }, value: "Cameroonian" },
            { label: { en: "Canadian", zh: "加拿大人" }, value: "Canadian" }, { label: { en: "Cape Verdian", zh: "佛得角人" }, value: "Cape Verdian" },
            { label: { en: "Chadian", zh: "乍得人" }, value: "Chadian" }, { label: { en: "Chilean", zh: "智利人" }, value: "Chilean" },
            { label: { en: "Chinese", zh: "中国人" }, value: "Chinese" }, { label: { en: "Colombian", zh: "哥伦比亚人" }, value: "Colombian" },
            { label: { en: "Congolese", zh: "刚果人" }, value: "Congolese" }, { label: { en: "Costa Rican", zh: "哥斯达黎加人" }, value: "Costa Rican" },
            { label: { en: "Croatian", zh: "克罗地亚人" }, value: "Croatian" }, { label: { en: "Cuban", zh: "古巴人" }, value: "Cuban" },
            { label: { en: "Cypriot", zh: "塞浦路斯人" }, value: "Cypriot" }, { label: { en: "Czech", zh: "捷克人" }, value: "Czech" },
            { label: { en: "Danish", zh: "丹麦人" }, value: "Danish" }, { label: { en: "Dominican", zh: "多米尼加人" }, value: "Dominican" },
            { label: { en: "Dutch", zh: "荷兰人" }, value: "Dutch" }, { label: { en: "Ecuadorean", zh: "厄瓜多尔人" }, value: "Ecuadorean" },
            { label: { en: "Egyptian", zh: "埃及人" }, value: "Egyptian" }, { label: { en: "Emirian", zh: "阿联酋人" }, value: "Emirian" },
            { label: { en: "Estonian", zh: "爱沙尼亚人" }, value: "Estonian" }, { label: { en: "Ethiopian", zh: "埃塞 Ethiopia 人" }, value: "Ethiopian" },
            { label: { en: "Fijian", zh: "斐济人" }, value: "Fijian" }, { label: { en: "Filipino", zh: "菲律宾人" }, value: "Filipino" },
            { label: { en: "Finnish", zh: "芬兰人" }, value: "Finnish" }, { label: { en: "French", zh: "法国人" }, value: "French" },
            { label: { en: "Gabonese", zh: "加蓬人" }, value: "Gabonese" }, { label: { en: "Gambian", zh: "冈比亚人" }, value: "Gambian" },
            { label: { en: "Georgian", zh: "格鲁吉亚人" }, value: "Georgian" }, { label: { en: "German", zh: "德国人" }, value: "German" },
            { label: { en: "Ghanaian", zh: "加纳人" }, value: "Ghanaian" }, { label: { en: "Greek", zh: "希腊人" }, value: "Greek" },
            { label: { en: "Guatemalan", zh: "危地马拉人" }, value: "Guatemalan" }, { label: { en: "Guinean", zh: "几内亚人" }, value: "Guinean" },
            { label: { en: "Haitian", zh: "海地人" }, value: "Haitian" }, { label: { en: "Honduran", zh: "洪都拉斯人" }, value: "Honduran" },
            { label: { en: "Hungarian", zh: "匈牙利人" }, value: "Hungarian" }, { label: { en: "Icelander", zh: "冰岛人" }, value: "Icelander" },
            { label: { en: "Indian", zh: "印度人" }, value: "Indian" }, { label: { en: "Indonesian", zh: "印度尼西亚人" }, value: "Indonesian" },
            { label: { en: "Iranian", zh: "伊朗人" }, value: "Iranian" }, { label: { en: "Iraqi", zh: "伊拉克人" }, value: "Iraqi" },
            { label: { en: "Irish", zh: "爱尔兰人" }, value: "Irish" }, { label: { en: "Israeli", zh: "以色列人" }, value: "Israeli" },
            { label: { en: "Italian", zh: "意大利人" }, value: "Italian" }, { label: { en: "Ivorian", zh: "科特迪瓦人" }, value: "Ivorian" },
            { label: { en: "Jamaican", zh: "牙买加人" }, value: "Jamaican" }, { label: { en: "Japanese", zh: "日本人" }, value: "Japanese" },
            { label: { en: "Jordanian", zh: "约旦人" }, value: "Jordanian" }, { label: { en: "Kazakhstani", zh: "哈萨克斯坦人" }, value: "Kazakhstani" },
            { label: { en: "Kenyan", zh: "肯尼亚人" }, value: "Kenyan" }, { label: { en: "North Korean", zh: "朝鲜人" }, value: "North Korean" },
            { label: { en: "South Korean", zh: "韩国人" }, value: "South Korean" }, { label: { en: "Kuwaiti", zh: "科威特人" }, value: "Kuwaiti" },
            { label: { en: "Kyrgyz", zh: "吉尔吉斯斯坦人" }, value: "Kyrgyz" }, { label: { en: "Laotian", zh: "老挝人" }, value: "Laotian" },
            { label: { en: "Latvian", zh: "拉脱维亚人" }, value: "Latvian" }, { label: { en: "Lebanese", zh: "黎巴嫩人" }, value: "Lebanese" },
            { label: { en: "Liberian", zh: "利比里亚人" }, value: "Liberian" }, { label: { en: "Libyan", zh: "利比亚人" }, value: "Libyan" },
            { label: { en: "Lithuanian", zh: "立陶宛人" }, value: "Lithuanian" }, { label: { en: "Luxembourgish", zh: "卢森堡人" }, value: "Luxembourgish" },
            { label: { en: "Macedonian", zh: "马其顿人" }, value: "Macedonian" }, { label: { en: "Malagasy", zh: "马达加斯加人" }, value: "Malagasy" },
            { label: { en: "Malawian", zh: "马拉维人" }, value: "Malawian" }, { label: { en: "Malaysian", zh: "马来西亚人" }, value: "Malaysian" },
            { label: { en: "Maldivan", zh: "马尔代夫人" }, value: "Maldivan" }, { label: { en: "Malian", zh: "马里人" }, value: "Malian" },
            { label: { en: "Maltese", zh: "马耳他人" }, value: "Maltese" }, { label: { en: "Mauritanian", zh: "毛里塔尼亚人" }, value: "Mauritanian" },
            { label: { en: "Mauritian", zh: "毛里求斯人" }, value: "Mauritian" }, { label: { en: "Mexican", zh: "墨西哥人" }, value: "Mexican" },
            { label: { en: "Moldovan", zh: "摩尔多瓦人" }, value: "Moldovan" }, { label: { en: "Mongolian", zh: "蒙古人" }, value: "Mongolian" },
            { label: { en: "Montenegrin", zh: "黑山人" }, value: "Montenegrin" }, { label: { en: "Moroccan", zh: "摩洛哥人" }, value: "Moroccan" },
            { label: { en: "Mozambican", zh: "莫桑比克人" }, value: "Mozambican" }, { label: { en: "Namibian", zh: "纳米比亚人" }, value: "Namibian" },
            { label: { en: "Nepalese", zh: "尼泊尔人" }, value: "Nepalese" }, { label: { en: "New Zealander", zh: "新西兰人" }, value: "New Zealander" },
            { label: { en: "Nicaraguan", zh: "尼加拉瓜人" }, value: "Nicaraguan" }, { label: { en: "Nigerian", zh: "尼日利亚人" }, value: "Nigerian" },
            { label: { en: "Norwegian", zh: "挪威人" }, value: "Norwegian" }, { label: { en: "Pakistani", zh: "巴基斯坦人" }, value: "Pakistani" },
            { label: { en: "Panamanian", zh: "巴拿马人" }, value: "Panamanian" }, { label: { en: "Paraguayan", zh: "巴拉圭人" }, value: "Paraguayan" },
            { label: { en: "Peruvian", zh: "秘鲁人" }, value: "Peruvian" }, { label: { en: "Polish", zh: "波兰人" }, value: "Polish" },
            { label: { en: "Portuguese", zh: "葡萄牙人" }, value: "Portuguese" }, { label: { en: "Qatari", zh: "卡塔尔人" }, value: "Qatari" },
            { label: { en: "Romanian", zh: "罗马尼亚人" }, value: "Romanian" }, { label: { en: "Russian", zh: "俄罗斯人" }, value: "Russian" },
            { label: { en: "Rwandan", zh: "卢旺达人" }, value: "Rwandan" }, { label: { en: "Salvadoran", zh: "萨尔瓦多人" }, value: "Salvadoran" },
            { label: { en: "Saudi", zh: "沙特阿拉伯人" }, value: "Saudi" }, { label: { en: "Scottish", zh: "苏格兰人" }, value: "Scottish" },
            { label: { en: "Senegalese", zh: "塞内加尔人" }, value: "Senegalese" }, { label: { en: "Serbian", zh: "塞尔维亚人" }, value: "Serbian" },
            { label: { en: "Singaporean", zh: "新加坡人" }, value: "Singaporean" }, { label: { en: "Slovakian", zh: "斯洛伐克人" }, value: "Slovakian" },
            { label: { en: "Slovenian", zh: "斯洛文尼亚人" }, value: "Slovenian" }, { label: { en: "Somali", zh: "索马里人" }, value: "Somali" },
            { label: { en: "South African", zh: "南非人" }, value: "South African" }, { label: { en: "Spanish", zh: "西班牙人" }, value: "Spanish" },
            { label: { en: "Sri Lankan", zh: "斯里兰卡人" }, value: "Sri Lankan" }, { label: { en: "Sudanese", zh: "苏丹人" }, value: "Sudanese" },
            { label: { en: "Swedish", zh: "瑞典人" }, value: "Swedish" }, { label: { en: "Swiss", zh: "瑞士人" }, value: "Swiss" },
            { label: { en: "Syrian", zh: "叙利亚人" }, value: "Syrian" }, { label: { en: "Thai", zh: "泰国人" }, value: "Thai" },
            { label: { en: "Togolese", zh: "多哥人" }, value: "Togolese" }, { label: { en: "Tunisian", zh: "突尼斯人" }, value: "Tunisian" },
            { label: { en: "Turkish", zh: "土耳其人" }, value: "Turkish" }, { label: { en: "Ugandan", zh: "乌干达人" }, value: "Ugandan" },
            { label: { en: "Ukrainian", zh: "乌克兰人" }, value: "Ukrainian" }, { label: { en: "Uruguayan", zh: "乌拉圭人" }, value: "Uruguayan" },
            { label: { en: "Uzbekistani", zh: "乌兹别克斯坦人" }, value: "Uzbekistani" }, { label: { en: "Venezuelan", zh: "委内瑞拉人" }, value: "Venezuelan" },
            { label: { en: "Vietnamese", zh: "越南人" }, value: "Vietnamese" }, { label: { en: "Welsh", zh: "威尔士人" }, value: "Welsh" },
            { label: { en: "Yemeni", zh: "也门人" }, value: "Yemeni" }, { label: { en: "Zambian", zh: "赞比亚人" }, value: "Zambian" },
            { label: { en: "Zimbabwean", zh: "津巴布韦人" }, value: "Zimbabwean" }
        ]
      },
      {
        id: 'body_weight',
        name: { en: 'Body Weight', zh: '💪 体重' },
        options: [
            defaultOption,
            { label: { en: 'Underweight', zh: '瘦' }, value: 'Underweight' },
            { label: { en: 'Normal weight', zh: '正常' }, value: 'Normal weight' },
            { label: { en: 'Overweight', zh: '超重' }, value: 'Overweight' },
            { label: { en: 'Obese', zh: '肥胖' }, value: 'Obese' },
        ]
      },
      {
        id: 'face_shape',
        name: { en: 'Face Shape', zh: '😊 脸型' },
        options: [
            defaultOption,
            { label: { en: "Oval", zh: "椭圆形" }, value: "Oval" }, { label: { en: "Round", zh: "圆形" }, value: "Round" }, 
            { label: { en: "Square", zh: "方形" }, value: "Square" }, { label: { en: "Heart-shaped", zh: "心形" }, value: "Heart-shaped" },
            { label: { en: "Long", zh: "长形" }, value: "Long" }, { label: { en: "Rectangle", zh: "长方形" }, value: "Rectangle" },
            { label: { en: "Triangle", zh: "三角形" }, value: "Triangle" }, { label: { en: "Inverted Triangle", zh: "倒三角形" }, value: "Inverted Triangle" },
            { label: { en: "Pear-shaped", zh: "梨形" }, value: "Pear-shaped" }, { label: { en: "Oblong", zh: "长椭圆形" }, value: "Oblong" }
        ]
      },
      {
        id: 'facial_feature_details',
        name: { en: 'Facial Features', zh: '😀 面部特征' },
        options: [
          defaultOption,
          { label: { en: 'High nose bridge', zh: '高鼻梁' }, value: 'High nose bridge' },
          { label: { en: 'Short nose', zh: '短鼻子' }, value: 'Short nose' },
          { label: { en: 'Large eyes', zh: '大眼睛' }, value: 'Large eyes' },
          { label: { en: 'Small eyes', zh: '小眼睛' }, value: 'Small eyes' },
          { label: { en: 'High cheekbones', zh: '高颧骨' }, value: 'High cheekbones' },
          { label: { en: 'Small mouth', zh: '小嘴巴' }, value: 'Small mouth' },
          { label: { en: 'Full lips', zh: '厚嘴唇' }, value: 'Full lips' },
          { label: { en: 'Perfect teeth', zh: '整齐牙齿' }, value: 'Perfect teeth' },
          { label: { en: 'Squint', zh: '斜视' }, value: 'Squint' },
          { label: { en: 'Natural expression', zh: '自然表情' }, value: 'Natural expression' },
        ]
      },
      {
        id: 'eye_features',
        name: { en: 'Eye Details', zh: '👁️ 眼部特征' },
        options: [
          defaultOption,
          { label: { en: 'Double eyelids', zh: '双眼皮' }, value: 'Double eyelids' },
          { label: { en: 'Single eyelids', zh: '单眼皮' }, value: 'Single eyelids' },
          { label: { en: 'Inner double eyelids', zh: '内双眼皮' }, value: 'Inner double eyelids' },
          { label: { en: 'Deep-set eyes', zh: '深陷眼睛' }, value: 'Deep-set eyes' },
          { label: { en: 'Bags under eyes', zh: '眼袋' }, value: 'Bags under eyes' },
          { label: { en: 'Eyeshadow effect', zh: '眼影效果' }, value: 'Eyeshadow effect' },
          { label: { en: 'Eyeliner', zh: '眼线' }, value: 'Eyeliner' },
        ]
      },
      {
        id: 'ears',
        name: { en: 'Ears', zh: '👂 耳朵' },
        options: [
          defaultOption,
          { label: { en: 'Visible ears', zh: '显示耳朵' }, value: 'Visible ears' },
          { label: { en: 'Hidden ears', zh: '遮掩耳朵' }, value: 'Hidden ears' },
          { label: { en: 'Large ears', zh: '大耳朵' }, value: 'Large ears' },
          { label: { en: 'Small ears', zh: '小耳朵' }, value: 'Small ears' },
          { label: { en: 'Pierced ears', zh: '破损耳朵' }, value: 'Pierced ears' },
          { label: { en: 'Earrings', zh: '耳环/耳饰' }, value: 'Earrings' },
        ]
      },
      {
        id: 'skin_details',
        name: { en: 'Skin Details', zh: '✨ 皮肤细节' },
        options: [
          defaultOption,
          { label: { en: 'Smooth skin', zh: '光滑皮肤' }, value: 'Smooth skin' },
          { label: { en: 'Spotted skin', zh: '斑点皮肤' }, value: 'Spotted skin' },
          { label: { en: 'Dull skin', zh: '暗沉皮肤' }, value: 'Dull skin' },
          { label: { en: 'Healthy glow', zh: '健康光泽' }, value: 'Healthy glow' },
          { label: { en: 'Natural skin tone', zh: '自然肤色' }, value: 'Natural skin tone' },
          { label: { en: 'Acne/Freckles', zh: '痘痘/雀斑' }, value: 'Acne/Freckles' },
          { label: { en: 'Wrinkles/Aged look', zh: '皱纹/衰老感' }, value: 'Wrinkles/Aged look' },
        ]
      },
      {
        id: 'skin_texture_effect',
        name: { en: 'Skin Texture', zh: '🧴 皮肤纹理' },
        options: [
          defaultOption,
          { label: { en: 'Flawless skin', zh: '皮肤细腻' }, value: 'Flawless skin' },
          { label: { en: 'Textured skin', zh: '皮肤质感' }, value: 'Textured skin' },
          { label: { en: 'Matte skin', zh: '皮肤磨砂效果' }, value: 'Matte skin' },
          { label: { en: 'Glossy skin', zh: '光泽皮肤' }, value: 'Glossy skin' },
          { label: { en: 'Enhanced detail texture', zh: '细节纹理增强' }, value: 'Enhanced detail texture' },
        ]
      },
      {
        id: 'expression',
        name: { en: 'Expression', zh: '😀 表情' },
        options: [
            defaultOption,
            { label: { en: "Happy", zh: "开心" }, value: "Happy" }, { label: { en: "Sad", zh: "伤心" }, value: "Sad" },
            { label: { en: "Angry", zh: "生气" }, value: "Angry" }, { label: { en: "Surprised", zh: "惊讶" }, value: "Surprised" },
            { label: { en: "Fearful", zh: "害怕" }, value: "Fearful" }, { label: { en: "Disgusted", zh: "厌恶" }, value: "Disgusted" },
            { label: { en: "Serious", zh: "严肃" }, value: "Serious" }, { label: { en: "Calm", zh: "冷静" }, value: "Calm" }
        ]
      },
      {
        id: 'eye_color',
        name: { en: 'Eye Color', zh: '👁️ 瞳色' },
        options: [
            defaultOption,
            { label: { en: "Brown", zh: "棕色" }, value: "Brown" }, { label: { en: "Blue", zh: "蓝色" }, value: "Blue" },
            { label: { en: "Green", zh: "绿色" }, value: "Green" }, { label: { en: "Hazel", zh: "淡褐色" }, value: "Hazel" },
            { label: { en: "Gray", zh: "灰色" }, value: "Gray" }, { label: { en: "Amber", zh: "琥珀色" }, value: "Amber" },
        ]
      },
      {
        id: 'hair_style',
        name: { en: 'Hairstyle', zh: '💇 发型' },
        options: [
            defaultOption,
            { label: { en: "Asymmetrical cut", zh: "不对称剪裁" }, value: "Asymmetrical cut" }, { label: { en: "Blunt cut", zh: "直剪" }, value: "Blunt cut" },
            { label: { en: "Bob cut", zh: "波波头" }, value: "Bob cut" }, { label: { en: "Buzz cut", zh: "寸头" }, value: "Buzz cut" },
            { label: { en: "Choppy cut", zh: "碎发剪裁" }, value: "Choppy cut" }, { label: { en: "Curtain bangs", zh: "幕帘刘海" }, value: "Curtain bangs" },
            { label: { en: "Faux hawk", zh: "飞机头" }, value: "Faux hawk" }, { label: { en: "Layered cut", zh: "层次剪裁" }, value: "Layered cut" },
            { label: { en: "Long bob", zh: "长波波头" }, value: "Long bob" }, { label: { en: "Mohawk", zh: "莫霍克发型" }, value: "Mohawk" },
            { label: { en: "Pixie cut", zh: "精灵短发" }, value: "Pixie cut" }, { label: { en: "Shag cut", zh: "散乱剪裁" }, value: "Shag cut" },
            { label: { en: "Undercut", zh: "底层剪裁" }, value: "Undercut" }, { label: { en: "French braids", zh: "法式辫" }, value: "French braids" },
            { label: { en: "Box braids", zh: "盒子辫" }, value: "Box braids" }, { label: { en: "Dreadlocks", zh: "脏辫" }, value: "Dreadlocks" }
        ]
      },
      {
        id: 'hair_color',
        name: { en: 'Hair Color', zh: '🎨 发色' },
        options: [
            defaultOption,
            { label: { en: "Black", zh: "黑色" }, value: "Black" }, { label: { en: "Brown", zh: "棕色" }, value: "Brown" },
            { label: { en: "Blonde", zh: "金色" }, value: "Blonde" }, { label: { en: "Red", zh: "红色" }, value: "Red" },
            { label: { en: "Auburn", zh: "赤褐色" }, value: "Auburn" }, { label: { en: "Gray", zh: "灰色" }, value: "Gray" },
            { label: { en: "White", zh: "白色" }, value: "White" }, { label: { en: "Salt and pepper", zh: "灰白混合色" }, value: "Salt and pepper" }
        ]
      },
      {
        id: 'beard',
        name: { en: 'Beard', zh: '🧔 胡子' },
        options: [
            defaultOption,
            { label: { en: "Stubble Beard", zh: "胡茬胡子" }, value: "Stubble Beard" }, { label: { en: "Goatee", zh: "山羊胡" }, value: "Goatee" },
            { label: { en: "Full Beard", zh: "全蓄胡子" }, value: "Full Beard" }, { label: { en: "Van Dyke Beard", zh: "范戴克胡" }, value: "Van Dyke Beard" },
            { label: { en: "Mutton Chops", zh: "羊腿胡" }, value: "Mutton Chops" }, { label: { en: "Circle Beard", zh: "圆圈胡" }, value: "Circle Beard" },
            { label: { en: "Handlebar Mustache", zh: "车把胡须" }, value: "Handlebar Mustache" }, { label: { en: "Pencil Mustache", zh: "铅笔胡须" }, value: "Pencil Mustache" }
        ]
      },
      {
        id: 'clothing_style',
        name: { en: 'Clothing Style', zh: '👕 服装风格' },
        options: [
          defaultOption,
          { label: { en: 'Formal wear', zh: '正装' }, value: 'Formal wear' },
          { label: { en: 'Casual wear', zh: '休闲装' }, value: 'Casual wear' },
          { label: { en: 'Sportswear', zh: '运动装' }, value: 'Sportswear' },
          { label: { en: 'Traditional costume', zh: '传统服饰' }, value: 'Traditional costume' },
          { label: { en: 'Vintage/Retro clothing', zh: '古典/复古服装' }, value: 'Vintage/Retro clothing' },
        ]
      },
      {
        id: 'clothing_texture',
        name: { en: 'Clothing Texture', zh: '👔 服饰纹理' },
        options: [
          defaultOption,
          { label: { en: 'Silk/Glossy texture', zh: '丝绸/光泽质感' }, value: 'Silk/Glossy texture' },
          { label: { en: 'Sweater texture', zh: '毛衣质感' }, value: 'Sweater texture' },
          { label: { en: 'Leather texture', zh: '皮革质感' }, value: 'Leather texture' },
          { label: { en: 'Printed pattern', zh: '印花图案' }, value: 'Printed pattern' },
          { label: { en: 'Denim texture', zh: '牛仔布质感' }, value: 'Denim texture' },
        ]
      },
      {
        id: 'head_accessories',
        name: { en: 'Head Accessories', zh: '👒 头部配饰' },
        options: [
          defaultOption,
          { label: { en: 'Hat (e.g., baseball cap, straw hat, fedora)', zh: '帽子' }, value: 'Hat' },
          { label: { en: 'Glasses (e.g., fashion glasses, sunglasses)', zh: '眼镜' }, value: 'Glasses' },
          { label: { en: 'Jewelry (e.g., necklace, earrings)', zh: '项链/耳环' }, value: 'Jewelry' },
          { label: { en: 'Hair accessories (e.g., hairpin, hairband)', zh: '发夹/发圈' }, value: 'Hair accessories' },
          { label: { en: 'Face accessories (e.g., mask, veil)', zh: '脸饰' }, value: 'Face accessories' },
        ]
      },
    ],
  },
  {
    name: { en: 'Photography', zh: '摄影' },
    controls: [
      {
        id: 'camera_type',
        name: { en: 'Camera Type', zh: '📷 相机类型' },
        options: [
          defaultOption,
          { label: { en: 'Full-frame DSLR', zh: '全画幅单反相机' }, value: 'Full-frame DSLR' },
          { label: { en: 'APS-C Camera', zh: 'APS-C画幅相机' }, value: 'APS-C Camera' },
          { label: { en: 'Mirrorless Camera', zh: '微单相机' }, value: 'Mirrorless Camera' },
          { label: { en: 'Medium Format Camera', zh: '中画幅相机' }, value: 'Medium Format Camera' },
          { label: { en: 'Point-and-shoot Camera', zh: '便携数码相机' }, value: 'Point-and-shoot Camera' },
          { label: { en: 'Phone Camera', zh: '手机相机' }, value: 'Phone Camera' },
        ]
      },
      {
        id: 'lens_type',
        name: { en: 'Lens Type', zh: '🔭 镜头类型' },
        options: [
          defaultOption,
          { label: { en: 'Standard lens (50mm f/1.8)', zh: '标准镜头' }, value: 'Standard lens (50mm f/1.8)' },
          { label: { en: 'Wide-angle lens (35mm, 24mm)', zh: '广角镜头' }, value: 'Wide-angle lens (35mm, 24mm)' },
          { label: { en: 'Medium telephoto lens (85mm, 105mm)', zh: '中长焦镜头' }, value: 'Medium telephoto lens (85mm, 105mm)' },
          { label: { en: 'Telephoto lens (200mm, 300mm)', zh: '长焦镜头' }, value: 'Telephoto lens (200mm, 300mm)' },
          { label: { en: 'Macro lens', zh: '微距镜头' }, value: 'Macro lens' },
          { label: { en: 'Fisheye lens', zh: '鱼眼镜头' }, value: 'Fisheye lens' },
          { label: { en: 'Zoom lens (24-70mm, 70-200mm)', zh: '变焦镜头' }, value: 'Zoom lens (24-70mm, 70-200mm)' },
          { label: { en: 'Prime lens (35mm, 50mm, 85mm)', zh: '定焦镜头' }, value: 'Prime lens (35mm, 50mm, 85mm)' },
          { label: { en: 'Large aperture lens (f/1.2, f/1.4)', zh: '大光圈镜头' }, value: 'Large aperture lens (f/1.2, f/1.4)' },
        ]
      },
      {
        id: 'focal_length',
        name: { en: 'Focal Length', zh: '📏 焦距' },
        options: [
          defaultOption,
          { label: { en: 'Ultra-wide angle (10mm-24mm)', zh: '超广角' }, value: 'Ultra-wide angle (10mm-24mm)' },
          { label: { en: 'Wide angle (35mm, 50mm)', zh: '广角' }, value: 'Wide angle (35mm, 50mm)' },
          { label: { en: 'Standard (85mm, 105mm)', zh: '标准焦距' }, value: 'Standard (85mm, 105mm)' },
          { label: { en: 'Telephoto (200mm, 300mm)', zh: '长焦' }, value: 'Telephoto (200mm, 300mm)' },
          { label: { en: 'Super-telephoto (400mm, 600mm)', zh: '超长焦' }, value: 'Super-telephoto (400mm, 600mm)' },
        ]
      },
      {
        id: 'aperture',
        name: { en: 'Aperture', zh: '⚙️ 光圈' },
        options: [
          defaultOption,
          { label: { en: 'Large aperture (f/1.2, f/1.4)', zh: '大光圈' }, value: 'Large aperture (f/1.2, f/1.4)' },
          { label: { en: 'Medium aperture (f/2.8, f/3.5)', zh: '中等光圈' }, value: 'Medium aperture (f/2.8, f/3.5)' },
          { label: { en: 'Small aperture (f/8, f/11)', zh: '小光圈' }, value: 'Small aperture (f/8, f/11)' },
        ]
      },
      {
        id: 'shutter_speed',
        name: { en: 'Shutter Speed', zh: '⏱️ 快门速度' },
        options: [
          defaultOption,
          { label: { en: 'Fast shutter (1/1000s, 1/500s)', zh: '快速快门' }, value: 'Fast shutter (1/1000s, 1/500s)' },
          { label: { en: 'Medium shutter (1/250s, 1/125s)', zh: '中等快门' }, value: 'Medium shutter (1/250s, 1/125s)' },
          { label: { en: 'Slow shutter (1/60s, 1/30s)', zh: '慢速快门' }, value: 'Slow shutter (1/60s, 1/30s)' },
        ]
      },
      {
        id: 'iso',
        name: { en: 'ISO', zh: '🎞️ ISO值' },
        options: [
          defaultOption,
          { label: { en: 'Low ISO (100-400)', zh: '低ISO' }, value: 'Low ISO (100-400)' },
          { label: { en: 'Medium ISO (800-1600)', zh: '中ISO' }, value: 'Medium ISO (800-1600)' },
          { label: { en: 'High ISO (3200-6400)', zh: '高ISO' }, value: 'High ISO (3200-6400)' },
        ]
      },
      {
        id: 'white_balance',
        name: { en: 'White Balance', zh: '⚖️ 白平衡' },
        options: [
          defaultOption,
          { label: { en: 'Auto', zh: '自动白平衡' }, value: 'Auto' },
          { label: { en: 'Daylight', zh: '日光' }, value: 'Daylight' },
          { label: { en: 'Cloudy', zh: '阴天' }, value: 'Cloudy' },
          { label: { en: 'Tungsten', zh: '白炽灯' }, value: 'Tungsten' },
          { label: { en: 'Fluorescent', zh: '荧光灯' }, value: 'Fluorescent' },
          { label: { en: 'Custom', zh: '自定义' }, value: 'Custom' },
        ]
      },
      {
        id: 'focus_mode',
        name: { en: 'Focus Mode', zh: '🎯 对焦模式' },
        options: [
          defaultOption,
          { label: { en: 'Single-point AF', zh: '单点对焦' }, value: 'Single-point AF' },
          { label: { en: 'Zone AF', zh: '区域对焦' }, value: 'Zone AF' },
          { label: { en: 'Auto AF', zh: '自动对焦' }, value: 'Auto AF' },
          { label: { en: 'Face detection AF', zh: '人脸识别对焦' }, value: 'Face detection AF' },
          { label: { en: 'Tracking AF', zh: '动态追踪对焦' }, value: 'Tracking AF' },
          { label: { en: 'Manual focus', zh: '手动对焦' }, value: 'Manual focus' },
        ]
      },
      {
        id: 'exposure_mode',
        name: { en: 'Exposure Mode', zh: '📈 曝光模式' },
        options: [
          defaultOption,
          { label: { en: 'Auto exposure', zh: '自动曝光' }, value: 'Auto exposure' },
          { label: { en: 'Shutter priority', zh: '快门优先' }, value: 'Shutter priority' },
          { label: { en: 'Aperture priority', zh: '光圈优先' }, value: 'Aperture priority' },
          { label: { en: 'Manual exposure', zh: '手动曝光' }, value: 'Manual exposure' },
          { label: { en: 'Exposure compensation', zh: '曝光补偿' }, value: 'Exposure compensation' },
        ]
      },
      {
        id: 'shooting_mode',
        name: { en: 'Shooting Mode', zh: '📸 拍摄模式' },
        options: [
          defaultOption,
          { label: { en: 'Single shot', zh: '单次拍摄' }, value: 'Single shot' },
          { label: { en: 'Burst mode', zh: '连拍模式' }, value: 'Burst mode' },
          { label: { en: 'Time-lapse', zh: '延时拍摄' }, value: 'Time-lapse' },
          { label: { en: 'Super slow-motion', zh: '超慢动作' }, value: 'Super slow-motion' },
        ]
      },
      {
        id: 'shooting_angle',
        name: { en: 'Shooting Angle', zh: '📐 拍摄角度' },
        options: [
          defaultOption,
          { label: { en: 'High angle (looking down)', zh: '高角度（俯视）' }, value: 'High angle (looking down)' },
          { label: { en: 'Low angle (looking up)', zh: '低角度（仰视）' }, value: 'Low angle (looking up)' },
          { label: { en: 'Front view', zh: '正面' }, value: 'Front view' },
          { label: { en: 'Side view', zh: '侧面' }, value: 'Side view' },
          { label: { en: '45-degree angle', zh: '45度角' }, value: '45-degree angle' },
        ]
      },
      {
        id: 'pose',
        name: { en: 'Pose', zh: '💃 姿势' },
        options: [
            defaultOption,
            { label: { en: "Power Pose", zh: "力量姿势" }, value: "Power Pose" }, { label: { en: "Walking Pose", zh: "行走姿势" }, value: "Walking Pose" },
            { label: { en: "S-curve Pose", zh: "S曲线姿势" }, value: "S-curve Pose" }, { label: { en: "Sitting Pose", zh: "坐姿" }, value: "Sitting Pose" },
            { label: { en: "Leaning Pose", zh: "倚靠姿势" }, value: "Leaning Pose" }, { label: { en: "Headshot Pose", zh: "头部特写姿势" }, value: "Headshot Pose" },
            { label: { en: "Hand-on-Hip Pose", zh: "手放腰间姿势" }, value: "Hand-on-Hip Pose" }, { label: { en: "Candid Laugh Pose", zh: "自然笑容姿势" }, value: "Candid Laugh Pose" },
            { label: { en: "High Fashion Pose", zh: "高级时尚姿势" }, value: "High Fashion Pose" }
        ]
      },
    ],
  },
  {
    name: { en: 'Style', zh: '风格' },
    controls: [
      {
        id: 'shot_type',
        name: { en: 'Shot Type', zh: '🖼️ 肖像类型' },
        options: [
            defaultOption,
            { label: { en: "Portrait", zh: "肖像" }, value: "Portrait" },
            { label: { en: "Head portrait", zh: "头像" }, value: "Head portrait" },
            { label: { en: "Head and shoulders portrait", zh: "肩部以上肖像" }, value: "Head and shoulders portrait" },
            { label: { en: "Half-length portrait", zh: "半身像" }, value: "Half-length portrait" },
            { label: { en: "Full-length portrait", zh: "全身像" }, value: "Full-length portrait" },
            { label: { en: "Face", zh: "脸部肖像" }, value: "Face" },
            { label: { en: "Close-up", zh: "特写" }, value: "Close-up" }
        ],
      },
      {
        id: 'imaging_style',
        name: { en: 'Imaging Style', zh: '🎨 成像风格' },
        options: [
          defaultOption,
          { label: { en: 'Standard mode', zh: '标准模式' }, value: 'Standard mode' },
          { label: { en: 'High contrast mode', zh: '高对比度模式' }, value: 'High contrast mode' },
          { label: { en: 'Landscape mode', zh: '风光模式' }, value: 'Landscape mode' },
          { label: { en: 'Portrait mode', zh: '人像模式' }, value: 'Portrait mode' },
          { label: { en: 'Black and white mode', zh: '黑白模式' }, value: 'Black and white mode' },
          { label: { en: 'Clarity enhancement', zh: '清晰度增强' }, value: 'Clarity enhancement' },
        ]
      },
      {
        id: 'artistic_style',
        name: { en: 'Artistic Style', zh: '🎭 艺术风格' },
        options: [
          defaultOption,
          { label: { en: 'Realistic style', zh: '写实风格' }, value: 'Realistic style' },
          { label: { en: 'Illustration style', zh: '插画风格' }, value: 'Illustration style' },
          { label: { en: 'Cartoon style', zh: '卡通风格' }, value: 'Cartoon style' },
          { label: { en: 'Watercolor style', zh: '水彩画风格' }, value: 'Watercolor style' },
          { label: { en: 'Vintage style', zh: '复古风格' }, value: 'Vintage style' },
          { label: { en: 'Steampunk style', zh: '蒸汽朋克风格' }, value: 'Steampunk style' },
        ]
      },
      {
        id: 'art_effect',
        name: { en: 'Art Effect', zh: '🖌️ 艺术效果' },
        options: [
          defaultOption,
          { label: { en: 'Oil painting effect', zh: '油画效果' }, value: 'Oil painting effect' },
          { label: { en: 'Ink wash painting effect', zh: '水墨画效果' }, value: 'Ink wash painting effect' },
          { label: { en: 'Sketch effect', zh: '素描效果' }, value: 'Sketch effect' },
          { label: { en: 'Colored pencil effect', zh: '彩铅画效果' }, value: 'Colored pencil effect' },
        ]
      },
      {
        id: 'depth_of_field',
        name: { en: 'Depth of Field', zh: '🏞️ 景深' },
        options: [
          defaultOption,
          { label: { en: 'Shallow depth of field (f/1.2-f/2.8)', zh: '浅景深' }, value: 'Shallow depth of field' },
          { label: { en: 'Medium depth of field (f/3.5-f/5.6)', zh: '中等景深' }, value: 'Medium depth of field' },
          { label: { en: 'Deep depth of field (f/8-f/11)', zh: '深景深' }, value: 'Deep depth of field' },
        ]
      },
      {
        id: 'photo_effect',
        name: { en: 'Photo Effect', zh: '✨ 照片效果' },
        options: [
          defaultOption,
          { label: { en: 'Aspect ratio crop (1:1, 16:9)', zh: '画幅剪裁' }, value: 'Aspect ratio crop (1:1, 16:9)' },
          { label: { en: 'Vintage style (e.g., slight fade)', zh: '复古风格' }, value: 'Vintage style' },
          { label: { en: 'HDR (High Dynamic Range)', zh: 'HDR' }, value: 'HDR (High Dynamic Range)' },
          { label: { en: 'Film effect (e.g., Fujifilm, Kodak)', zh: '胶片效果' }, value: 'Film effect' },
          { label: { en: 'Hard and soft light', zh: '硬光与软光' }, value: 'Hard and soft light' },
          { label: { en: 'Long exposure effect', zh: '长曝光效果' }, value: 'Long exposure effect' },
        ]
      },
      {
        id: 'special_effect',
        name: { en: 'Special Effects', zh: '🪄 特殊效果' },
        options: [
          defaultOption,
          { label: { en: 'Low saturation', zh: '低饱和度' }, value: 'Low saturation' },
          { label: { en: 'High contrast', zh: '高对比度' }, value: 'High contrast' },
          { label: { en: 'High Dynamic Range (HDR)', zh: '高动态范围' }, value: 'High Dynamic Range (HDR)' },
          { label: { en: 'Duotone effect', zh: '双色调效果' }, value: 'Duotone effect' },
          { label: { en: 'Fluorescent/Neon style', zh: '荧光/霓虹风格' }, value: 'Fluorescent/Neon style' },
        ]
      },
      {
        id: 'post_processing_style',
        name: { en: 'Post-processing', zh: '🔧 后期处理' },
        options: [
          defaultOption,
          { label: { en: 'Filter (vintage, B&W, film)', zh: '滤镜' }, value: 'Filter (vintage, B&W, film)' },
          { label: { en: 'Sharpening', zh: '锐化' }, value: 'Sharpening' },
          { label: { en: 'Denoise', zh: '去噪' }, value: 'Denoise' },
          { label: { en: 'Color correction', zh: '色彩校正' }, value: 'Color correction' },
          { label: { en: 'Film grain', zh: '胶片颗粒' }, value: 'Film grain' },
        ]
      },
    ],
  },
  {
    name: { en: 'Environment', zh: '环境' },
    controls: [
      {
        id: 'environment_atmosphere',
        name: { en: 'Atmosphere', zh: '☀️ 环境氛围' },
        options: [
          defaultOption,
          { label: { en: 'Warm sunlight (dusk, dawn)', zh: '温暖阳光' }, value: 'Warm sunlight (dusk, dawn)' },
          { label: { en: 'Cool tone (e.g., icy blue)', zh: '冷调' }, value: 'Cool tone' },
          { label: { en: 'Dark atmosphere (night, low light)', zh: '暗黑氛围' }, value: 'Dark atmosphere' },
          { label: { en: 'Cloudy/Hazy environment', zh: '阴天/雾霾环境' }, value: 'Cloudy/Hazy environment' },
          { label: { en: 'Light through window', zh: '光线透过窗户' }, value: 'Light through window' },
        ]
      },
      {
        id: 'light_style',
        name: { en: 'Lighting Style', zh: '💡 灯光类型' },
        options: [
            defaultOption,
            { label: { en: "Natural sunlight", zh: "自然阳光" }, value: "Natural sunlight" }, { label: { en: "Soft ambient light", zh: "柔和环境光" }, value: "Soft ambient light" },
            { label: { en: "Harsh sunlight", zh: "强烈阳光" }, value: "Harsh sunlight" }, { label: { en: "Overcast sky", zh: "阴天" }, value: "Overcast sky" },
            { label: { en: "Sunset glow", zh: "日落余晖" }, value: "Sunset glow" }, { label: { en: "Candlelight", zh: "烛光" }, value: "Candlelight" },
            { label: { en: "Moonlight", zh: "月光" }, value: "Moonlight" }, { label: { en: "Backlit silhouette", zh: "逆光剪影" }, value: "Backlit silhouette" },
            { label: { en: "Spotlight", zh: "聚光灯" }, value: "Spotlight" }, { label: { en: "Rim lighting", zh: "边缘光" }, value: "Rim lighting" },
            { label: { en: "Studio lighting", zh: "摄影棚灯光" }, value: "Studio lighting" }, { label: { en: "Golden hour light", zh: "黄金时刻光线" }, value: "Golden hour light" },
            { label: { en: "Blue hour light", zh: "蓝色时刻光线" }, value: "Blue hour light" }, { label: { en: "Neon lights", zh: "霓虹灯" }, value: "Neon lights" }
        ]
      },
      {
        id: 'light_direction',
        name: { en: 'Lighting Direction', zh: '🧭 灯光方向' },
        options: [
            defaultOption,
            { label: { en: "from top", zh: "从上方" }, value: "from top" }, { label: { en: "from bottom", zh: "从下方" }, value: "from bottom" },
            { label: { en: "from right", zh: "从右侧" }, value: "from right" }, { label: { en: "from left", zh: "从左侧" }, value: "from left" },
            { label: { en: "from front", zh: "从前方" }, value: "from front" }, { label: { en: "from top-right", zh: "从右上方" }, value: "from top-right" },
            { label: { en: "from top-left", zh: "从左上方" }, value: "from top-left" }
        ]
      },
      {
        id: 'background',
        name: { en: 'Background', zh: '🏞️ 背景' },
        options: [
          defaultOption,
          { label: { en: 'Natural landscape (beach, forest, mountains)', zh: '自然景观' }, value: 'Natural landscape' },
          { label: { en: 'Urban background (buildings, streets)', zh: '城市背景' }, value: 'Urban background' },
          { label: { en: 'Simple background (solid color or gradient)', zh: '简单背景' }, value: 'Simple background' },
          { label: { en: 'Indoor background (home, office)', zh: '室内背景' }, value: 'Indoor background' },
          { label: { en: 'Virtual background (sci-fi, futuristic city)', zh: '虚拟背景' }, value: 'Virtual background' },
        ]
      },
      {
        id: 'background_effect',
        name: { en: 'Background Effect', zh: '🌆 背景效果' },
        options: [
          defaultOption,
          { label: { en: 'Dynamic background (pedestrians, scenery changes)', zh: '动态背景' }, value: 'Dynamic background' },
          { label: { en: 'Neon light background', zh: '霓虹灯背景' }, value: 'Neon light background' },
          { label: { en: 'Starry sky background', zh: '星空背景' }, value: 'Starry sky background' },
          { label: { en: 'Fog/Mist effect', zh: '雾霾/雾气效果' }, value: 'Fog/Mist effect' },
          { label: { en: 'Minimalist background (pure white, pure black)', zh: '极简背景' }, value: 'Minimalist background' },
        ]
      },
      {
        id: 'background_blur',
        name: { en: 'Background Blur', zh: '🌫️ 背景虚化' },
        options: [
          defaultOption,
          { label: { en: 'Slight blur', zh: '轻度虚化' }, value: 'Slight blur' },
          { label: { en: 'Strong blur (like large aperture)', zh: '强烈虚化' }, value: 'Strong blur' },
          { label: { en: 'Haze effect', zh: '雾霾效果' }, value: 'Haze effect' },
        ]
      },
    ]
  }
];