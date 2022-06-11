import { DriveFolderUpload } from '@mui/icons-material'
import {
    Box,
    Button,
    Input,
    InputLabel,
    TextField,
    styled,
    RadioGroup,
    FormControlLabel,
    Radio,
    Typography,
    Autocomplete,
    Chip,
} from '@mui/material'

import { useState } from 'react'

const Header = styled(Box)(({ theme }) => ({
    padding: 20,
    boxShadow: theme.shadows[2],
    borderRadius: theme.shape.borderRadius,
    fontWeight: 500,
    fontSize: '20px',
    color: '#9a9a9a',
}))

const AddContainer = styled(Box)(({ theme }) => ({
    padding: 20,
    boxShadow: theme.shadows[2],
    borderRadius: theme.shape.borderRadius,
    display: 'flex',
}))

const AddForm = styled('form')({})
const StyledInput = styled(Input)({
    fontSize: '16px',
    fontWeight: 400,
    width: '80%',
    paddingLeft: 1,
})
const StyledLabel = styled(InputLabel)({
    fontSize: '16px',
    fontWeight: 500,
})
const InputContainer = styled(Box)({
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
})

const InputRadio = styled(FormControlLabel)({
    '& .MuiSvgIcon-root': {
        fontSize: 16,
    },

    color: '#666',
})
const StyledTextField = styled(TextField)({
    width: '80%',
    fontSize: '12px',
})

const category = [
    'Shirts',
    'Linen Shirts',
    'Shorts',
    'Cargo Shorts',
    'Pants',
    'Hoodies & Sweatshirts',
    'Sweatshirts',
    'Hoodies',
    'Jeans',
    'Slim',
    'Coats & Jackets',
    'Jackets',
]
const size = [
    'XS',
    'S',
    'M',
    'L',
    'XL',
    '2Xl',
    '3XL',
    '1-2Y',
    '2-3Y',
    '3-4Y',
    '4-5Y',
    '5-6Y',
    '6-7Y',
    '7-8Y',
]
const status = ['Top', 'New', 'Sale', 'Out Of Stock']

const NewProduct = ({ title, data }) => {
    const [file, setFile] = useState(undefined)
    const [input, setInput] = useState({})
    const [categories, setCategories] = useState([])
    const [sizes, setSizes] = useState([])
    const [statuses, setStatuses] = useState([])

    const onSetCat = (e) => {
        if (categories.includes(e.target.innerText)) {
            setCategories([
                ...categories.filter(
                    (category) => category !== e.target.innerText
                ),
            ])
        } else if (e.target.innerText === undefined) {
            // setCategories([
            //     ...categories.filter(
            //         (category) => category !== e.target.parentElement.parentElement.innerText
            //     ),
            // ])
            console.log(e.target.parentElement)
        } else {
            setCategories((categories) => [...categories, e.target.innerText])
        }
    }
    const onInputChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(input)
    }
    console.log(categories)

    return (
        <Box sx={{ padding: '30px', height: '100vh' }}>
            <Header>Add New Product</Header>
            <AddContainer mt={3}>
                <Box
                    flex={1}
                    sx={{ display: 'flex', justifyContent: 'center' }}
                >
                    <div
                        style={{
                            height: '100px',
                            width: '100px',
                            border: '1px solid grey',
                        }}
                    >
                        <img
                            style={{
                                height: '100%',
                                width: '100%',
                                objectFit: 'contain',
                            }}
                            src={
                                file
                                    ? URL.createObjectURL(file)
                                    : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
                            }
                            alt="avatar"
                        />
                    </div>
                </Box>
                <Box flex={2}>
                    <AddForm onSubmit={handleSubmit}>
                        <InputContainer mb={2}>
                            <Box mb={2}>
                                <StyledLabel
                                    htmlFor="file"
                                    sx={{
                                        marginRight: '30px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        cursor: 'pointer',
                                    }}
                                >
                                    Image:
                                    <DriveFolderUpload
                                        sx={{ marginLeft: '30px' }}
                                    />
                                </StyledLabel>
                                <StyledInput
                                    id="file"
                                    sx={{ display: 'none' }}
                                    type="file"
                                    onChange={(e) => setFile(e.target.files[0])}
                                />
                            </Box>
                            <Box mb={2}>
                                <StyledLabel htmlFor="title">Title</StyledLabel>
                                <StyledInput
                                    onChange={onInputChange}
                                    name="title"
                                    id="title"
                                    type="text"
                                    placeholder="Cotton T-Shirt"
                                />
                            </Box>
                            <Box mb={2}>
                                <StyledLabel htmlFor="desc">
                                    Description
                                </StyledLabel>
                                <StyledInput
                                    onChange={onInputChange}
                                    name="desc"
                                    id="desc"
                                    type="text"
                                    placeholder="Beautiful Cotton T-Shirt"
                                />
                            </Box>
                            <Box mb={2}>
                                <StyledLabel htmlFor="brand">Brand</StyledLabel>
                                <StyledInput
                                    onChange={onInputChange}
                                    name="brand"
                                    id="brand"
                                    type="text"
                                    placeholder="Adidas"
                                />
                            </Box>
                            <Box mb={2}>
                                <StyledLabel htmlFor="price">
                                    Price $
                                </StyledLabel>
                                <StyledInput
                                    onChange={onInputChange}
                                    name="price"
                                    id="price"
                                    type="number"
                                    placeholder="34.00"
                                />
                            </Box>
                            <Box mb={2}>
                                <StyledLabel htmlFor="Gender">
                                    Gender
                                </StyledLabel>
                                <RadioGroup
                                    onChange={onInputChange}
                                    name="gender"
                                    row
                                    defaultValue="Women"
                                    // name="radio-buttons-group"
                                >
                                    <InputRadio
                                        value="Women"
                                        control={<Radio />}
                                        label={
                                            <Typography
                                                variant="span"
                                                fontSize={14}
                                            >
                                                Female
                                            </Typography>
                                        }
                                    />
                                    <InputRadio
                                        value="Men"
                                        control={<Radio />}
                                        label={
                                            <Typography
                                                variant="span"
                                                fontSize={14}
                                            >
                                                Male
                                            </Typography>
                                        }
                                    />
                                    <InputRadio
                                        value="Boys"
                                        control={<Radio />}
                                        label={
                                            <Typography
                                                variant="span"
                                                fontSize={14}
                                            >
                                                Boys
                                            </Typography>
                                        }
                                    />
                                    <InputRadio
                                        value="Girls"
                                        control={<Radio />}
                                        label={
                                            <Typography
                                                variant="span"
                                                fontSize={14}
                                            >
                                                Girls
                                            </Typography>
                                        }
                                    />
                                </RadioGroup>
                            </Box>
                            <Box mb={2}>
                                <StyledLabel htmlFor="category">
                                    Category
                                </StyledLabel>
                                <Autocomplete
                                    // onChange={(e) =>
                                    //     setCategories((categories) => [
                                    //         ...categories,
                                    //         e.target.innerText,
                                    //     ])
                                    // }
                                    onChange={onSetCat}
                                    multiple
                                    id="tags-filled"
                                    options={category.map((option) => option)}
                                    freeSolo
                                    renderTags={(value, getTagProps) =>
                                        value.map((option, index) => (
                                            <Chip
                                                variant="outlined"
                                                label={option}
                                                {...getTagProps({ index })}
                                            />
                                        ))
                                    }
                                    renderInput={(params) => (
                                        <StyledTextField
                                            {...params}
                                            variant="standard"
                                            placeholder="Set Category"
                                        />
                                    )}
                                />
                            </Box>
                            <Box mb={2}>
                                <StyledLabel htmlFor="size">Size</StyledLabel>
                                <Autocomplete
                                    onChange={(e) =>
                                        setSizes((sizes) => [
                                            ...sizes,
                                            e.target.innerText,
                                        ])
                                    }
                                    multiple
                                    id="tags-filled"
                                    options={size.map((option) => option)}
                                    freeSolo
                                    renderTags={(value, getTagProps) =>
                                        value.map((option, index) => (
                                            <Chip
                                                variant="outlined"
                                                label={option}
                                                {...getTagProps({ index })}
                                            />
                                        ))
                                    }
                                    renderInput={(params) => (
                                        <StyledTextField
                                            {...params}
                                            variant="standard"
                                            placeholder="Set Size"
                                        />
                                    )}
                                />
                            </Box>
                            <Box mb={2}>
                                <StyledLabel htmlFor="status">
                                    Status
                                </StyledLabel>
                                <Autocomplete
                                    onChange={(e) =>
                                        setStatuses((statuses) => [
                                            ...statuses,
                                            e.target.innerText,
                                        ])
                                    }
                                    multiple
                                    id="tags-filled"
                                    options={status.map((option) => option)}
                                    freeSolo
                                    renderTags={(value, getTagProps) =>
                                        value.map((option, index) => (
                                            <Chip
                                                variant="outlined"
                                                label={option}
                                                {...getTagProps({ index })}
                                            />
                                        ))
                                    }
                                    renderInput={(params) => (
                                        <StyledTextField
                                            {...params}
                                            variant="standard"
                                            placeholder="Set Status"
                                        />
                                    )}
                                />
                            </Box>
                        </InputContainer>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Button
                                type="submit"
                                sx={{
                                    textTransform: 'none',
                                    padding: '5px 50px',
                                }}
                                variant="contained"
                            >
                                Send
                            </Button>
                        </Box>
                    </AddForm>
                </Box>
            </AddContainer>
        </Box>
    )
}

export default NewProduct
