<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import MagicText from "$lib/components/MagicText.svelte";
    interface blogmeta {
        name : string,
        title : string,
        date : string,
        file : string,
    }
    export let data : {data : Array<blogmeta>};
</script>
<Header/>
<MagicText text = "这里是我的个人主页，分享一些使用过的工具或者看过的一些论文、博客"/>
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