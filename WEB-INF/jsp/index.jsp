

<base href="<%= request.getContextPath() %>" />


<link href="<%= request.getContextPath() %>/build/styles.9fbf21f073a9f0ec85cd.css" rel="stylesheet">


<div class="container-fluid">
    <ui-view></ui-view>
</div>


<script>
    
    window['env'] = {"apiHost":"<%= request.getContextPath() %>"};
    
</script>



<script src="<%= request.getContextPath() %>/build/manifest.a04fbbee6143b7c4d05f.js"></script>

<script src="<%= request.getContextPath() %>/build/vendor.ebd5726383c2d6fed249.js"></script>

<script src="<%= request.getContextPath() %>/build/app.9fbf21f073a9f0ec85cd.js"></script>
