<script>
    export let data;
</script>
<h1>{data.meta.title}</h1>
<p>Published at : {data.meta.date}</p>


{@html data.content}

