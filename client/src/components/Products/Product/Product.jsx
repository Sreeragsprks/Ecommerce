import React from 'react'
import { Grid, Card, CardHeader, IconButton } from '@material-ui/core'
import {Bookmark} from '@material-ui/icons'
import useStyle from './styles'

const Product = () => {
    const classes = useStyle();
    return (
        <Grid item xs={12} sm={3}>
            <Card className={classes.root}>
                <CardHeader
                    action={
                    <IconButton aria-label="wishlist">
                        <Bookmark />
                    </IconButton>
                    }
                    title='Product Name'
                    // subheader="September 14, 2016"
                />
            </Card>
        </Grid>
    )
}

export default Product
