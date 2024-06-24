<template>
  <div>
    <!-- <AdminAppSideBar>
      <AdminNavbar />
    </AdminAppSideBar> -->
    <!-- <slot /> -->
    <AdminAppSideBar>
      <template #navbar>
        <AdminNavbar />
      </template>
      <template v-slot>
        <!-- Dynamic content goes here -->
        <div>
          <h1>Page Title</h1>
          <p>This is some dynamic content.</p>
        </div>
      </template>
    </AdminAppSideBar>
  </div>
</template>

<script setup></script>
