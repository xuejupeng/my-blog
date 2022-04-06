import mock, {
    Random
} from 'mockjs';

const data = mock.mock('/api/blog', 'get', function () {
    return mock.mock({
        'total|1000-2000': 1000,
        'data|10': [{
            'id|+1': 1,
            "title|2-5": '@ctitle',
            date: '@date',
            "browse|1-500": 500,
            "comment|1-300": 300,
            "class|1-15": 10,
            "content": '@csentence(100, 120)',
            'img|1': ["@image(200x130, @color, #fff, @csentence)", null]
        }]
    })

})


const classData = mock.mock('/api/class', 'get', function () {
    return mock.mock({
        'data|12': [{
            'class|+1': 1,
            'num|1-500': 100,
        }]
    })
})