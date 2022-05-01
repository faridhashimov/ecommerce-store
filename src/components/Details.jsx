import styled from 'styled-components'

const Info = styled.div``

const InfoPart = styled.div`
    margin-bottom: 10px;
    p {
        color: #666;
        font-size: 15px;
        font-weight: 300;
    }
`

const Details = () => {
    return (
        <Info>
            <InfoPart>
                <p>
                    <strong>Composition</strong>: <br /> Paper 100%
                </p>
            </InfoPart>
            <InfoPart>
                <p>
                    <strong>Description </strong>: <br /> Beige <br /> Solid-color
                </p>
            </InfoPart>
            <InfoPart>
                <p>
                    <strong>Imported</strong>: <br />
                    Yes
                </p>
            </InfoPart>
            <InfoPart>
                <p>
                    <strong>Art. No.</strong>: <br />
                    1057731001
                </p>
            </InfoPart>
        </Info>
    )
}

export default Details


