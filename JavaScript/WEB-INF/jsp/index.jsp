<%@ taglib prefix="portlet" uri="http://java.sun.com/portlet_2_0" %>
<%@ page contentType="text/html" isELIgnored="false" import="javax.portlet.PortletSession" %>
<%@ page import="javax.portlet.PortletRequest" %>
<portlet:defineObjects/>

<!doctype html>
<html ng-app="myAccApp">
<!--[if lt IE 7]>      <html class="no-js lt-ie10 lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie10 lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie10 lt-ie9"> <![endif]-->
<!--[if IE 9]>         <html class="no-js lt-ie10"> <![endif]-->

<head>
  <base href="/">
<link href="../../webapp/styles.576ae4a5c796826153d6.css" rel="stylesheet"></head>
<body>
<div data-navbar title="myACC"></div>
<div class="header-container">
  <h1>My Acc: Testing</h1>
  <div class="header-image-container"></div>
</div>
<div class="container">
  <div class="row"></div>
  <ui-view></ui-view>
</div>
<div class="footer">
  <div class="container">
    <p>| MyACC | Solnet Solutions</p>
  </div>
</div>
<script src="../../webapp/manifest.54aaeae37dd7df3a3a24.js"></script><script src="../../webapp/vendor.783de054665757312e2b.js"></script><script src="../../webapp/app.576ae4a5c796826153d6.js"></script></body>
</html>