<%@ taglib prefix="portlet" uri="http://java.sun.com/portlet_2_0"%>
<%@ page contentType="text/html" isELIgnored="false"
	import="javax.portlet.PortletSession"%>
<%@page import="javax.portlet.PortletRequest"%>

<portlet:defineObjects />


<div class="portlet full-width">
	<p><%=renderRequest.getPortletSession().getAttribute("LOGGED_IN_USER") %></p>
	<h1>Welcome to MyACC</h1>
</div>

