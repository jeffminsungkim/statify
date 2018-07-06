<template>
    <nav id="sidebar" v-bind:class="currentProps">
      <div class="sidebar-header">
                <h3>Voice Caddie</h3>
                <strong>VC</strong>
      </div>
     <!-- Sidebar Links -->
      <ul class="list-unstyled components">
        <p>Dummy Heading</p>
          <li class="active">
            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">
              <i class="glyphicon glyphicon-home"></i>
              Documentation
            </a>
          </li>
          <li>
              <a href="#">
                  <i class="glyphicon glyphicon-briefcase"></i>
                  Daily
              </a>
              <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">
                  <i class="glyphicon glyphicon-duplicate"></i>
                  Weekly
              </a>
              <ul class="collapse list-unstyled" id="pageSubmenu">
                  <li><a href="#">Page 1</a></li>
                  <li><a href="#">Page 2</a></li>
                  <li><a href="#">Page 3</a></li>
              </ul>
          </li>
          <li>
              <a href="#">
                  <i class="glyphicon glyphicon-link"></i>
                  Monthly
              </a>
          </li>
          <li>
              <a href="#">
                  <i class="glyphicon glyphicon-send"></i>
                  Yearly
              </a>
          </li>
      </ul>
    </nav>
</template>

<script>
export default {
  props: ['isActive'],
  computed: {
    currentProps: function () {
      return { active: this.isActive }
    }
  }
}

/* export default {
  data() {
    return { isActive: false }
  }
} */
</script>

<style scoped>
a, a:hover, a:focus {
    color: inherit;
    text-decoration: none;
    transition: all 0.3s;
}

#sidebar {
  min-width: 250px;
  max-width: 250px;
  min-height: 100vh;
  background: #7386D5;
  color: #fff;
  transition: all 0.3s;
}

#sidebar .sidebar-header {
  padding: 20px;
  background: #6d7fcc;
}

#sidebar ul.components {
  padding: 20px 0;
  border-bottom: 1px solid #47748b;
}

#sidebar ul p {
  color: #fff;
  padding: 10px;
}

#sidebar ul li a {
    padding: 10px;
    font-size: 1.1em;
    display: block;
}
#sidebar ul li a:hover {
    color: #7386D5;
    background: #fff;
}

#sidebar ul li.active > a, a[aria-expanded="true"] {
    color: #fff;
    background: #6d7fcc;
}
ul ul a {
    font-size: 0.9em !important;
    padding-left: 30px !important;
    background: #6d7fcc;
}

#sidebar.active {
  min-width: 80px;
  max-width: 130px;
  text-align: center;
}

/* Toggling the sidebar header content, hide the big heading [h3] and showing the small heading [strong] and vice versa*/
#sidebar .sidebar-header strong {
  display: none;
}
#sidebar.active .sidebar-header h3 {
  display: none;
}
#sidebar.active .sidebar-header strong {
  display: block;
}

#sidebar ul li a {
  text-align: left;
}

#sidebar.active ul li a {
  padding: 15px 10px;
  text-align: center;
  font-size: 0.85em;
}

#sidebar.active ul li a i {
  margin-right: 0;
  display: block;
  font-size: 1.8em;
  margin-bottom: 5px;
}

/* Same dropdown links padding*/
#sidebar.active ul ul a {
  padding: 10px !important;
}

/* Changing the arrow position to bottom center position,
   translateX(50%) works with right: 50%
   to accurately  center the arrow */
#sidebar.active a[aria-expanded="false"]::before,
#sidebar.active a[aria-expanded="true"]::before {
  top: auto;
  bottom: 5px;
  right: 50%;
  transform: translateX(50%);
}
</style>
