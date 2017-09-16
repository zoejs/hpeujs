var name = 'zoe';
function sum(a,b){
	return a+b;
};

sum(1,2);

sum(2,3);

//https://github.com/zoejs/hpeujs.gitgit init  初始化

// git config (--global全局配置) user.name
// git config (--global全局配置) user.email

// git diff   查看工作区和版本库之间的差异
// git status   查看状态

// git add 文件名 (-A  /--all)   全部添加的参数
// git commit -m "提交的相关信息"

// 假设。我先在感觉前提交一个条件，有误，想撤回
// 1：首先查看历史记录:git log (--pretty=oneline以行显示)
// 2：git reset -hard 加需要撤回到的地址id
// 3：查看ref记录

// git checkout 文件名  撤回文件，撤回加原删除的文件名可以使删

// 除的又回来

// 连接远程仓库
// 连接
// git remote add origin https://github.com/zoejs/hpeujs.git

// 传输
// git push origin -u master