Drupal.behaviors.narrow = {
    attach(context) {
        // console.logargs);
        const urlParams = new URLSearchParams(window.location.search);
        const args = urlParams.get('args');
        if(args) {
            const args_value = args.split(';')
            Array.from(args_value).forEach((item) => {
                let params = item.split(':');
                if(params[0] === 'variation' && params[1] === 'fixed-container') {
                    context.body.classList.add('fixed-container');
                }
            });
        }
        const template_id = urlParams.get('id');
        if(template_id === 'templates-layouts--fixed-container') {
            context.body.classList.add('fixed-container');
        }
        else {
            context.body.classList.remove('fixed-container');
        }
    },
};
