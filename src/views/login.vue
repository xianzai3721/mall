<template>
  <div class="content">
    <div class="container-fluid">
      <h4 class="page-title">用户登录</h4>
      <div class="row">
        <div class="col-md-4">
          <div class="card">
            <form action="/dologin" method="post">
              <div class="form-group">
                <label for="username">用户名</label>
                <input type="text" class="form-control" id="username" name="username" placeholder="请输入账户">
              </div>
              <div class="form-group">
                <label for="password">登录密码</label>
                <input type="password" class="form-control" name="password" id="password" placeholder="请输密码">
              </div>
              <div class="form-check">
                <label class="form-check-label" style="color: red">

                </label>
              </div>
              <div class="form-group">
                <a href="/register">注册账户</a>
              </div>
              <div class="card-action">
                <button class="btn btn-success">登录</button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </div>
    <footer class="footer">
      <div class="container-fluid">
        <nav class="pull-left">
          <ul class="nav">
            <li class="nav-item">
              <a class="nav-link" href="#">
                ThemeKita
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Help
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Licenses
              </a>
            </li>
          </ul>
        </nav>
        <div class="copyright ml-auto">
          2018, made with <i class="la la-heart heart text-danger"></i> by <a href="#">ThemeKita</a> - More Templates <a href="http://www.cssmoban.com/" target="_blank" title="模板之家">模板之家</a> - Collect from <a href="http://www.cssmoban.com/" title="网页模板" target="_blank">网页模板</a></div>
      </div>
    </footer>
  </div>
</template>

<script>
    export default {
        name: "login"
    }
</script>

<style scoped>

</style>
