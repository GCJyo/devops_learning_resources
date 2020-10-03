import React from 'react';
import Grid from '@material-ui/core/Grid';
function ResourceList() {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                ListItem
            </Grid>
            <Grid item xs={12}>
                TickBox
            </Grid>
        </Grid>
    );
}

export default ResourceList;