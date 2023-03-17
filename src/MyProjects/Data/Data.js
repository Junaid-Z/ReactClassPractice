const mobiles = [
	{
		name: "iphone4",
		brand: "iphone",
		price: 4000,
	},
	{
		name: "iphone5",
		brand: "iphone",
		price: 6000,
	},
	{
		name: "redmiNote11",
		brand: "xiaomi",
		price: 40000,
	},
	{
		name: "redmiNote11pro",
		brand: "xiaomi",
		price: 50000,
	},
	{
		name: "note20",
		brand: "samsung",
		price: 400000,
	},
	{
		name: "galaxyS20",
		brand: "samsung",
		price: 400000,
	},
	{
		name: "c20",
		brand: "realme",
		price: 20000,
	},
	{
		name: "c21",
		brand: "realme",
		price: 20000,
	},
	{
		name: "v20s",
		brand: "vivo",
		price: 15000,
	},
	{
		name: "v20",
		brand: "vivo",
		price: 15000,
	},
	{
		name: "a3s",
		brand: "oppo",
		price: 25000,
	},
	{
		name: "a3",
		brand: "oppo",
		price: 25000,
	}
];
var questions = [
	{
		numb: 1,
		question: "What does HTML stand for?",
		answer: "Hyper Text Markup Language",
		options: [
			"Hyper Text Preprocessor",
			"Hyper Text Markup Language",
			"Hyper Text Multiple Language",
			"Hyper Tool Multi Language",
		],
	},
	{
		numb: 2,
		question: "What does CSS stand for?",
		answer: "Cascading Style Sheet",
		options: [
			"Common Style Sheet",
			"Colorful Style Sheet",
			"Computer Style Sheet",
			"Cascading Style Sheet",
		],
	},
	{
		numb: 3,
		question: "What does PHP stand for?",
		answer: "Hypertext Preprocessor",
		options: [
			"Hypertext Preprocessor",
			"Hypertext Programming",
			"Hypertext Preprogramming",
			"Hometext Preprocessor",
		],
	},
	{
		numb: 4,
		question: "What does SQL stand for?",
		answer: "Structured Query Language",
		options: [
			"Stylish Question Language",
			"Stylesheet Query Language",
			"Statement Question Language",
			"Structured Query Language",
		],
	},
	{
		numb: 5,
		question: "What does XML stand for?",
		answer: "eXtensible Markup Language",
		options: [
			"eXtensible Markup Language",
			"eXecutable Multiple Language",
			"eXTra Multi-Program Language",
			"eXamine Multiple Language",
		],
	},

];
var cards = [
	{ title: "Item1", imageLink: "https://mountsinai.on.ca/wellbeing/images/image-placeholder/image", info: "131231311312313" },
	{ title: "Item2", imageLink: "https://mountsinai.on.ca/wellbeing/images/image-placeholder/image", info: "131231311312313" },
	{ title: "Item3", imageLink: "https://mountsinai.on.ca/wellbeing/images/image-placeholder/image", info: "131231311312313" },
	{ title: "Item4", imageLink: "https://mountsinai.on.ca/wellbeing/images/image-placeholder/image", info: "131231311312313" },
]
var tableData = [
	{ id: 1, title: "ABC", description: "ABCDEFGHIJKLMNO", price: 123 },
	{ id: 1, title: "ABC", description: "ABCDEFGHIJKLMNO", price: 123 },
	{ id: 1, title: "ABC", description: "ABCDEFGHIJKLMNO", price: 123 },
	{ id: 1, title: "ABC", description: "ABCDEFGHIJKLMNO", price: 123 },
	{ id: 1, title: "ABC", description: "ABCDEFGHIJKLMNO", price: 123 },
	{ id: 1, title: "ABC", description: "ABCDEFGHIJKLMNO", price: 123 },
]
let pagesList = [
	{
		title: "CounterApp",
		url: "counter"
	},
	{
		title: "Cards",
		url: "cards"
	},
	{
		title: "Dynamic Cards",
		url: "dynamicCards"
	},
	{
		title: "List",
		url: "list"
	},
	{
		title: "Dynamic List",
		url: "dynamicList"
	},
	{
		title: "Quiz App",
		url: "quizApp"
	},
	{
		title: "ECommerce",
		url: "eCommerce"
	},
	{
		title: "Data From API",
		url: "API"
	},
	{
		title: "API Practice",
		url: "API2"
	},
	{
		title: "ECommerceFrmAPI",
		url: "eCommerceAPI"
	},
	{
		title: "Dashboard",
		url: "/"
	},
	{
		title: "Login",
		url: "login"
	},
	{
		title: "TODO App",
		url: "todoapp"
	},
	{
		title: "Testing",
		url: "testing"
	},
	{
		title: "ErrorPage",
		url: "*"
	},
]
export {
	mobiles,
	questions,
	cards,
	tableData,
	pagesList
}