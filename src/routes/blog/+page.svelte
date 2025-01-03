<script lang="ts">
    interface blogmeta {
        name : string,
        title : string,
        date : string,
        file : string,
    }
    export let data : {data : Array<blogmeta>};
</script>
<h2>Blogs</h2>
<ul>
{#each data.data as post}
    <li>
        <a href={"/blog/" + post.name}>
            <h3>
                {post.title}
            </h3>
        </a>
        Published : {post.date}
    </li>
{/each}
</ul>

<style>
    ul {
        list-style: none;
    }
</style>