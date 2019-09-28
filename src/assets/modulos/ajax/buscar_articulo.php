<?php
	require_once ("../config/db.php");
	require_once ("../config/conexion.php");
?>

<?php
			
$action='ajax';
	if($action == 'ajax'){
         $q = mysqli_real_escape_string($con,(strip_tags($_REQUEST['q'], ENT_QUOTES)));
		  $sTable = "productos";
		 $sWhere = "";
		 $sWhere.="WHERE id>1";
		if ( $_GET['q'] != "" )
		{
		$sWhere.= " and titulo like '%$q%' or descripcion like '%$q%'";
			
		}else{
			$sWhere.= " and titulo like '%qsdsdsdsdsdsdsdsdsdsds%' ";
			
		}
		
		$sWhere.=" order by titulo asc";
		include 'pagination.php'; //include pagination file
		//pagination variables
		$page = (isset($_REQUEST['page']) && !empty($_REQUEST['page']))?$_REQUEST['page']:1;
		$per_page = 10; //how much records you want to show
		$adjacents  = 4; //gap between pages after number of adjacents
		$offset = ($page - 1) * $per_page;
		//Count the total number of row in your table*/
		$count_query   = mysqli_query($con, "SELECT count(*) AS numrows FROM $sTable  $sWhere");
		$row= mysqli_fetch_array($count_query);
		$numrows = $row['numrows'];
		$total_pages = ceil($numrows/$per_page);
		$reload = './buscar.php';
		//main query to fetch the data
		$sql="SELECT * FROM  $sTable $sWhere LIMIT $offset,$per_page";
		$query = mysqli_query($con, $sql);
		//loop through fetched data
		if ($numrows>0){
			echo mysqli_error($con);
			?>

			<div class="container-fluid productos">
				<div class="container">
					<div class="row">
						<div class="col-xs-12 tituloDestacado">

							<div class="col-sm-12 col-xs-12">
						
								<h1><small>Resultados de tu busqueda</small></h1>

							</div>
						</div>

					<div class="clearfix"></div>

					<hr>


						<ul class="grid3">
				
			
			 	<?php

				while ($row=mysqli_fetch_array($query)){
						$apellidos=$row['titulo'];
						$cargo=$row['portada'];
						$ruta =$row['ruta'];
						$precio =$row['precio'];
						
						
						$id=$row['id'];
		
					?>
					
							<li class="col-md-2 col-sm-3 col-xs-12">

							<figure>
								
								
								<a href="<?php echo utf8_encode($ruta);?>" class="pixelProducto">	
									<img src='../backend/<?php echo utf8_encode($cargo);?>' class="img-responsive" width="100%">
									
								</a>

							</figure>
							<h4>
					
								<small>
									
									<a href="<?php echo utf8_encode($ruta);?>" class="pixelProducto">
										
										<?php echo utf8_encode($apellidos);?><br>

										<span style="color:rgba(0,0,0,0)">-</span>


											<span class="label label-warning fontSize">Resultado</span>

										

										
									</a>	

								</small>			

							</h4>
						<div class="col-xs-6 precio">
							<h2><small>MXN <?php echo utf8_encode($precio);?></small></h2>
						</div>
						<div class="col-xs-6 enlaces">
								
								<div class="btn-group pull-right">
									
									<button type="button" class="btn btn-default btn-xs deseos" idProducto="<?php echo utf8_encode($id);?>" data-toggle="tooltip" title="Agregar a mi lista de deseos">
										
										<i class="fa fa-heart" aria-hidden="true"></i>

									</button>
								</div>
						</div>
						</li>
					



							
						
					<?php
				}
				?>
				</ul>
							<span class="pull-right"><? echo paginate($reload, $page, $total_pages, $adjacents);?></span>
				</div>
			</div>
		</div>
			
				<?php
		}
	}
?>