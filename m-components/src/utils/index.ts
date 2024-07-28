// 把图标的驼峰命名法转换为横杠形式
export const toLine = (value: string) => {
    return value.replace(/(A-Z)/, '-$1').toLocaleLowerCase()
} 