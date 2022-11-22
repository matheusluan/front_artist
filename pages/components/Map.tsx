
import { Avatar, Typography } from '@mui/material';
import * as React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import {  deepPurple } from '@mui/material/colors';

function Map() {
    return (
        <MapContainer center={[0, 0]} zoom={3} style={{ height: '100%', width: '100%', borderRadius: '8px' }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[-25.54, -54.58]}>
                <Popup>
                    <div style={{ display: 'flex', gap: '25px' }}>
                        <div>
                            <Typography sx={{
                                fontSize: '18px',
                                fontFamily: 'nunito',
                                fontWeight: 400
                            }}>Camila da silva</Typography>
                            <Typography sx={{
                                fontSize: '12px',
                                fontFamily: 'nunito',
                                fontWeight: 400
                            }}>Sertanejo, Rock, Pop</Typography>

                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Avatar sx={{ margin: '20px  auto', width: 56, height: 56, bgcolor: deepPurple[500] }} variant="rounded">
                                    CA
                            </Avatar>
                        </div>
                    </div>

                </Popup>
            </Marker>

            <Marker position={[-25.55, -54.58]}>
                <Popup>
                    <div style={{ display: 'flex', gap: '25px',minWidth:'200px'}}>
                        <div>
                            <Typography noWrap sx={{
                                fontSize: '18px',
                                fontFamily: 'nunito',
                                fontWeight: 400
                            }}>Joao</Typography>
                            <Typography noWrap sx={{
                                fontSize: '12px',
                                fontFamily: 'nunito',
                                fontWeight: 400
                            }}>Palhaço, Fantasia, Festa infantil</Typography>

                        </div>
                        <div>
                         
                            <Avatar sx={{ margin: '20px  auto', width: 56, height: 56, bgcolor: deepPurple[500] }} variant="rounded">
                                    Jo
                            </Avatar>
                        </div>
                    </div>

                </Popup>
            </Marker>
        </MapContainer>
    );
}
export default Map;