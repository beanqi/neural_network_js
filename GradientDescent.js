// 梯度下降法实现线性回归
function gradientDescentLinearRegression(x, y, learningRate = 0.001, epochs = 10000) {
    const n = x.length; // 数据点的数量
    let slope = 0; // 初始斜率
    let intercept = 0; // 初始截距

    // 进行多次迭代以优化参数
    for (let epoch = 0; epoch < epochs; epoch++) {
        let slopeGradient = 0; // 斜率的梯度
        let interceptGradient = 0; // 截距的梯度

        // 计算梯度
        for (let i = 0; i < n; i++) {
            const prediction = slope * x[i] + intercept; // 预测值
            const error = prediction - y[i]; // 预测误差
            slopeGradient += (2 / n) * error * x[i]; // 斜率梯度的累加
            interceptGradient += (2 / n) * error; // 截距梯度的累加
        }

        // 根据梯度更新参数
        slope -= learningRate * slopeGradient; // 更新斜率
        intercept -= learningRate * interceptGradient; // 更新截距

        // 打印每次迭代的信息
        if (epoch % 100 === 0) {
            console.log(`Epoch ${epoch}: slope = ${slope}, intercept = ${intercept}, slopeGradient = ${slopeGradient}, interceptGradient = ${interceptGradient}`);
        }
    }

    return { slope, intercept }; // 返回最终的斜率和截距
}

// 测试数据
const x = [1, 2, 3, 4, 5]; // 自变量数据
const y = [2, 3, 5, 6, 8]; // 因变量数据

// 执行梯度下降法线性回归
const learningRate = 0.01; // 学习率，控制每次更新的步长
const epochs = 1000; // 迭代次数
const result = gradientDescentLinearRegression(x, y, learningRate, epochs); // 调用函数进行线性回归
console.log(`梯度下降法线性回归结果: y = ${result.slope}x + ${result.intercept}`); // 打印最终的回归方程
console.log(`梯度下降法线性回归结果: y = ${result.slope}x + ${result.intercept}`);
