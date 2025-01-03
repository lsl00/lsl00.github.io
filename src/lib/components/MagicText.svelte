<script lang="ts">
    let {text} : {text : string}  = $props();
    let displayedText : string = $state('');
    let index = $state(0);

    const interval = setInterval(() => {
        if(index < text.length){
            displayedText = displayedText + text[index];
            index++;
        }else{
            clearInterval(interval);
        }
    },50);
</script>

<p>{@html displayedText}</p>