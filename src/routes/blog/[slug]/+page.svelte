<script>
    export let data;
</script>

<header>
    <a href="/">Back Home</a>
</header>

<h1>{data.meta.title}</h1>
<p>Published at : {data.meta.date}</p>

  

{@html data.content}

<style>
    header {
      padding: 1rem auto 0px auto;
      margin: 1rem auto 0px auto;
      max-width: 45rem;
    }
</style>